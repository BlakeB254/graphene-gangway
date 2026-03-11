import { NextResponse } from "next/server";
import { initializePrograms, initializeProgramSections } from "@/lib/db";

export async function POST() {
  try {
    await initializePrograms();
    await initializeProgramSections();
    return NextResponse.json({ success: true, message: "Programs tables initialized" });
  } catch (error) {
    console.error("Failed to initialize programs tables:", error);
    return NextResponse.json(
      { success: false, error: "Failed to initialize tables" },
      { status: 500 }
    );
  }
}
