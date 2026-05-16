import { SITE } from "@/constants/site"

/**
 * Builds a wa.me URL for the brand's WhatsApp number.
 * Optionally includes a pre-filled message.
 */
export function formatWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
