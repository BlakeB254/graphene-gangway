import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function buildMagicLinkEmail(magicLinkUrl: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#1A1D24;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1A1D24;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="background-color:#2A2D35;border-radius:12px;border:1px solid #32363F;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="padding:32px 40px 24px;text-align:center;border-bottom:1px solid #32363F;">
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#00F0FF;letter-spacing:2px;">
                GRAPHENE GANGWAY
              </h1>
              <p style="margin:8px 0 0;font-size:12px;color:#8B9199;letter-spacing:4px;text-transform:uppercase;">
                Portal Access
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 16px;font-size:16px;color:#E8FEFF;line-height:1.6;">
                You requested a sign-in link. Click the button below to access the Graphene Gangway portal.
              </p>
              <p style="margin:0 0 24px;font-size:13px;color:#8B9199;line-height:1.5;">
                This link expires in 15 minutes and can only be used once.
              </p>

              <!-- CTA Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:8px 0 24px;">
                    <a href="${magicLinkUrl}"
                       style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#00F0FF,#00B8C4);color:#1A1D24;font-size:15px;font-weight:700;text-decoration:none;border-radius:8px;letter-spacing:1px;">
                      Sign in to Graphene Gangway
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Fallback Link -->
              <p style="margin:0 0 8px;font-size:12px;color:#8B9199;">
                If the button doesn&rsquo;t work, copy and paste this link:
              </p>
              <p style="margin:0;font-size:12px;color:#00B8C4;word-break:break-all;">
                ${magicLinkUrl}
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;text-align:center;border-top:1px solid #32363F;">
              <p style="margin:0;font-size:11px;color:#8B9199;">
                &copy; ${new Date().getFullYear()} Graphene Gangway. All rights reserved.
              </p>
              <p style="margin:4px 0 0;font-size:11px;color:#8B9199;">
                If you didn&rsquo;t request this email, you can safely ignore it.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function sendMagicLinkEmail(
  email: string,
  magicLinkUrl: string
): Promise<{ success: boolean; devModeUrl?: string }> {
  const html = buildMagicLinkEmail(magicLinkUrl);

  // Dev mode: log to console when RESEND_API_KEY is not set
  if (!resend) {
    console.log("\n========================================");
    console.log("  DEV MODE — Magic Link Email");
    console.log("========================================");
    console.log(`  To:   ${email}`);
    console.log(`  Link: ${magicLinkUrl}`);
    console.log("========================================\n");

    return { success: true, devModeUrl: magicLinkUrl };
  }

  const fromAddress =
    process.env.EMAIL_FROM || "Graphene Gangway <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: email,
    subject: "Your Graphene Gangway Sign-In Link",
    html,
  });

  if (error) {
    console.error("Failed to send magic link email:", error);
    return { success: false };
  }

  return { success: true };
}
