import type { Metadata } from "next";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export const metadata: Metadata = buildMetadata({
  title: "Thank You | Inquiry Confirmed — NAVCHETNAA AI",
  description:
    "Thank you for contacting NAVCHETNAA AI. Your project inquiry has been received and confirmed.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <section
      style={{
        paddingBlock: "clamp(4.5rem, 9vw, 8rem)",
        backgroundColor: "var(--color-white)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <Container narrow>
        <div
          style={{
            backgroundColor: "var(--color-soft-white)",
            border: "1px solid var(--color-border-strong)",
            borderTop: "4px solid var(--color-lime)",
            padding: "clamp(2rem, 5vw, 3.5rem)",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              backgroundColor: "var(--color-dark-text)",
              color: "var(--color-lime)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckCircle2 size={28} />
          </div>

          <span className="eyebrow">
            <span className="eyebrowDot" aria-hidden="true" />
            <span>INQUIRY CONFIRMED</span>
          </span>

          <h1
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.12,
            }}
          >
            Thank You. Your Project Brief Has Been Received.
          </h1>

          <p className="leadText" style={{ maxWidth: "62ch" }}>
            Our engineering team at <strong>{SITE_CONFIG.name}</strong> has
            logged your requirements and will review your scope shortly. For
            urgent discussions, you can also connect directly via WhatsApp or
            email.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.85rem",
              paddingTop: "0.75rem",
            }}
          >
            <Button href="/" variant="primary">
              <span>Return to Homepage</span>
              <ArrowRight size={16} />
            </Button>

            <Button
              href={SITE_CONFIG.contact.whatsappUrl}
              variant="secondary"
              external
            >
              <MessageSquare size={16} />
              <span>Message on WhatsApp</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}