import crypto from "crypto"

interface WompiEvent {
  data: Record<string, unknown>
  timestamp: number
  signature: {
    properties: string[]
    checksum: string
  }
}

function getByPath(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[key]
    return undefined
  }, obj)
}

export function isValidWompiSignature(event: WompiEvent, secret: string): boolean {
  const values = event.signature.properties.map((path) => String(getByPath(event.data, path)))
  const concatenated = values.join("") + event.timestamp + secret

  const calculated = crypto.createHash("sha256").update(concatenated).digest("hex").toUpperCase()

  return calculated === event.signature.checksum.toUpperCase()
}
