import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const multiplications = Array.from({ length: 12 }, (_, i) =>
      Array.from({ length: 12 }, (_, j) => (i + 1) * (j + 1))
    );
    return NextResponse.json(multiplications);
  } catch (err) {
    return NextResponse.json(err);
  }
}
