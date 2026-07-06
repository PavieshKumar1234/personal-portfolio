import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, and message are required",
        },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB || "portfolioDB")

    const result = await db.collection("messages").insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    })

    return NextResponse.json(
      {
        success: true,
        message: "Message saved successfully",
        id: result.insertedId,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Contact API error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    )
  }
}