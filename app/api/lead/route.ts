import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  // Future integration example:
  // await fetch(process.env.LEAD_WEBHOOK_URL!, { method: "POST", body: JSON.stringify(payload) });
  // Or send to Google Sheets via Apps Script endpoint.

  return NextResponse.json({
    success: true,
    message: "Lead captured",
    payload
  });
}
