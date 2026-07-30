import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(
      "https://winovo.io/api/creator/users",
      {
        method: "GET",
        headers: {
          "x-creator-auth": process.env.WINOVO_API_KEY,
        },
        cache: "no-store",
      }
    );

    const body = await response.text();

    return NextResponse.json({
      winovoStatus: response.status,
      winovoStatusText: response.statusText,
      response: body
    });

  } catch (error) {
    return NextResponse.json({
      error: error.message
    });
  }
}
