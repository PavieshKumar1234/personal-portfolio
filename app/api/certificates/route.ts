import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB || "portfolioDB")

    const certificates = await db
      .collection("certificates")
      .find({})
      .sort({ order: 1 })
      .toArray()

    return NextResponse.json({
      success: true,
      certificates,
    })
  } catch (error) {
    console.error("Certificates GET error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch certificates",
      },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, tag, desc, button, fileUrl, order } = body

    if (!title || !tag || !desc || !button || !fileUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Title, tag, description, button, and file URL are required",
        },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB || "portfolioDB")

    const result = await db.collection("certificates").insertOne({
      title,
      tag,
      desc,
      button,
      fileUrl,
      order: order || 1,
      createdAt: new Date(),
    })

    return NextResponse.json(
      {
        success: true,
        message: "Certificate added successfully",
        id: result.insertedId,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Certificates POST error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to add certificate",
      },
      { status: 500 }
    )
  }
}