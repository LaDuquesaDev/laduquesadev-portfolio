import { NextRequest, NextResponse } from "next/server"
import { readFileSync } from "fs"
import path from "path"
import { Resend } from "resend"
import { isValidWompiSignature } from "@/lib/wompi-signature"

const guideBuffer = readFileSync(
  path.join(process.cwd(), "src/assets/guides/tu-app-en-las-tiendas.html")
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const event = await request.json()

  const secret = process.env.WOMPI_EVENTS_SECRET
  if (!secret || !isValidWompiSignature(event, secret)) {
    return NextResponse.json({ error: "invalid signature" }, { status: 401 })
  }

  const transaction = event.data?.transaction
  if (transaction?.status !== "APPROVED") {
    return NextResponse.json({ received: true })
  }

  const paymentLinkId = process.env.WOMPI_PAYMENT_LINK_ID
  if (paymentLinkId && transaction.payment_link_id !== paymentLinkId) {
    return NextResponse.json({ received: true })
  }

  const customerEmail = transaction.customer_email
  if (!customerEmail) {
    return NextResponse.json({ error: "missing customer_email" }, { status: 400 })
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL as string,
      to: customerEmail,
      subject: "Tu guía — Tu app en las tiendas",
      html: "<p>¡Gracias por tu compra! Encuentra la guía adjunta a este correo.</p>",
      attachments: [
        {
          filename: "Tu-app-en-las-tiendas.html",
          content: guideBuffer,
        },
      ],
    })

    if (error) {
      console.error("Resend rejected the email", error)
      return NextResponse.json({ error: "email send failed" }, { status: 500 })
    }
  } catch (error) {
    console.error("Failed to send guide email", error)
    return NextResponse.json({ error: "email send failed" }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
