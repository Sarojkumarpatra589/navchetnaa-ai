import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export default function NotFoundPage() {
  return (
    <section
      className="architecturalGrid"
      style={{
        paddingBlock: "clamp(5rem, 10vw, 8.5rem)",
        backgroundColor: "var(--color-white)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <Container narrow>
        <div
          style={{
            backgroundColor: "var(--color-white)",
            border: "1px solid var(--color-border-strong)",
            borderTop: "4px solid var(--color-lime)",
            padding: "clamp(2rem, 5vw, 3.5rem)",
            display: "flex",
            flexDirection: "column",
            gap: "1.35rem",
          }}
        >
          <span className="eyebrow">
            <span className="eyebrowDot" aria-hidden="true" />
            <span>ERROR 404 // ROUTE NOT FOUND</span>
          </span>

          <h1
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.35rem)",
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            This Page Does Not Exist in Our Architecture.
          </h1>

          <p className="leadText" style={{ maxWidth: "58ch" }}>
            The URL you followed may have moved or been mistyped. Use the
            navigation below to explore NAVCHETNAA AI&apos;s engineering
            services, applied AI solutions, products, or contact our team.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.85rem",
              paddingTop: "0.5rem",
            }}
          >
            <Button href="/" variant="primary">
              <span>Return to Homepage</span>
              <ArrowRight size={16} />
            </Button>

            <Button href="/services" variant="secondary">
              <Compass size={16} />
              <span>Explore Services</span>
            </Button>

            <Button href="/contact" variant="secondary">
              <span>Start Your Project</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}