import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const test = await prisma.user.findMany();
    return Response.json({ success: true, count: test.length });
  } catch (err) {
    return Response.json({ success: false, error: err.message });
  }
}
