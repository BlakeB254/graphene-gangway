// YNA-specific database initialization — extends GG's db.ts

import { getDb } from "@/lib/db";

export async function initializeYnaTables() {
  // YNA member profiles
  await getDb()`
    CREATE TABLE IF NOT EXISTS yna_member_profiles (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR(255) NOT NULL UNIQUE,
      name VARCHAR(255),
      track VARCHAR(50),
      grade VARCHAR(50),
      age_range VARCHAR(20),
      interests TEXT[],
      skills TEXT[],
      experience_level VARCHAR(20),
      career_goals TEXT,
      short_term_goals TEXT,
      motivations TEXT[],
      time_commitment_preference VARCHAR(20),
      location_preferences TEXT[],
      preferred_opportunity_types TEXT[],
      profile_completion_score INTEGER DEFAULT 0,
      onboarding_completed BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  // YNA saved opportunities
  await getDb()`
    CREATE TABLE IF NOT EXISTS yna_saved_opportunities (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR(255) NOT NULL,
      opportunity_id VARCHAR(255) NOT NULL,
      notes TEXT,
      match_score INTEGER,
      saved_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  // YNA user activity
  await getDb()`
    CREATE TABLE IF NOT EXISTS yna_user_activity (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR(255) NOT NULL,
      opportunity_id VARCHAR(255) NOT NULL,
      action_type VARCHAR(20) NOT NULL,
      metadata JSONB,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  // YNA rewards
  await getDb()`
    CREATE TABLE IF NOT EXISTS yna_rewards (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR(255) NOT NULL,
      type VARCHAR(50) NOT NULL,
      amount INTEGER,
      badge_name VARCHAR(255),
      badge_image VARCHAR(512),
      source_type VARCHAR(50) NOT NULL,
      source_id VARCHAR(255),
      title VARCHAR(255) NOT NULL,
      description TEXT,
      claimed BOOLEAN DEFAULT FALSE,
      claimed_at TIMESTAMPTZ,
      earned_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

export async function getYnaProfile(email: string) {
  await initializeYnaTables();
  const rows = await getDb()`
    SELECT * FROM yna_member_profiles WHERE email = ${email.toLowerCase()} LIMIT 1
  `;
  return rows[0] || null;
}

export async function upsertYnaProfile(
  email: string,
  data: Record<string, unknown>
) {
  await initializeYnaTables();
  const existing = await getYnaProfile(email);
  if (existing) {
    await getDb()`
      UPDATE yna_member_profiles
      SET name = COALESCE(${data.name as string || null}, name),
          track = COALESCE(${data.track as string || null}, track),
          interests = COALESCE(${data.interests as string[] || null}, interests),
          skills = COALESCE(${data.skills as string[] || null}, skills),
          experience_level = COALESCE(${data.experience_level as string || null}, experience_level),
          career_goals = COALESCE(${data.career_goals as string || null}, career_goals),
          profile_completion_score = COALESCE(${data.profile_completion_score as number || null}, profile_completion_score),
          onboarding_completed = COALESCE(${data.onboarding_completed as boolean || null}, onboarding_completed),
          updated_at = NOW()
      WHERE email = ${email.toLowerCase()}
    `;
    return getYnaProfile(email);
  } else {
    await getDb()`
      INSERT INTO yna_member_profiles (email, name)
      VALUES (${email.toLowerCase()}, ${data.name as string || null})
    `;
    return getYnaProfile(email);
  }
}

export async function getYnaSavedOpportunities(email: string) {
  await initializeYnaTables();
  const rows = await getDb()`
    SELECT * FROM yna_saved_opportunities
    WHERE email = ${email.toLowerCase()}
    ORDER BY saved_at DESC
  `;
  return rows;
}

export async function toggleYnaSavedOpportunity(
  email: string,
  opportunityId: string,
  matchScore?: number
) {
  await initializeYnaTables();
  const existing = await getDb()`
    SELECT id FROM yna_saved_opportunities
    WHERE email = ${email.toLowerCase()} AND opportunity_id = ${opportunityId}
    LIMIT 1
  `;
  if (existing.length > 0) {
    await getDb()`
      DELETE FROM yna_saved_opportunities
      WHERE email = ${email.toLowerCase()} AND opportunity_id = ${opportunityId}
    `;
    return { saved: false };
  } else {
    await getDb()`
      INSERT INTO yna_saved_opportunities (email, opportunity_id, match_score)
      VALUES (${email.toLowerCase()}, ${opportunityId}, ${matchScore ?? null})
    `;
    return { saved: true };
  }
}

export async function getYnaRewards(email: string) {
  await initializeYnaTables();
  const rows = await getDb()`
    SELECT * FROM yna_rewards
    WHERE email = ${email.toLowerCase()}
    ORDER BY earned_at DESC
  `;
  return rows;
}

export async function getYnaDashboardStats(email: string) {
  await initializeYnaTables();
  const savedCount = await getDb()`
    SELECT COUNT(*)::int as count FROM yna_saved_opportunities WHERE email = ${email.toLowerCase()}
  `;
  const profile = await getYnaProfile(email);
  return {
    totalApplications: 0,
    pendingApplications: 0,
    acceptedApplications: 0,
    savedOpportunities: savedCount[0]?.count ?? 0,
    profileCompletion: profile?.profile_completion_score ?? 0,
  };
}
