import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

export default function GarageToGolfChannel() {
  return (
    <>
      <Head>
        <title>Million Dollar Success Story | Case Study</title>
        <meta
          name="description"
          content="Discover how we helped a golf training aid go from prototype to million-dollar success, featured on the Golf Channel and endorsed by PGA pros."
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="From Garage to Golf Channel"
            className="mb-16 !text-6xl text-center lg:!text-5xl sm:!text-4xl xs:!text-3xl"
          />

          <article className="mx-auto max-w-5xl text-lg font-medium leading-relaxed">
            <div className="mx-auto max-w-4xl text-lg leading-relaxed text-dark dark:text-light space-y-6">
              <h2 className="mb-6 text-4xl font-bold">
                How We Turned a Prototype Into a Million-Dollar Success Story
              </h2>

              <p>
                Every great product starts with a moment of inspiration. For Foundation Golf, that moment came when a passionate golfer had an idea for a revolutionary training aid. But having a great idea and turning it into a million-dollar product? Those are two very different things.
              </p>
              <p>
                That&#s where we came in.
              </p>

              <h3 className="mb-4 mt-8 text-2xl font-bold">The Vision</h3>
              <p>
                When we first saw the prototype, we didn&#t just see a golf training aid — we saw potential. But transforming that potential into profit would require more than just marketing. It would require complete product development, strategic branding, and the kind of launch that turns heads in a crowded golf market.
              </p>

              <h3 className="mb-4 mt-8 text-2xl font-bold">The Transformation</h3>
              <p>
                We didn&#t just market the product — we helped create it. From redesigning the physical product to developing the brand identity, every detail mattered. The product was meticulously sourced and manufactured. But we knew that in the golf world, credibility is everything.
              </p>
              <p>
                Enter Rocco Mediate — the PGA Tour professional known for his legendary battle with Tiger Woods. When Mediate and his coach saw the product&#s potential, they didn&#t just endorse it — they became passionate advocates. Their expertise and credibility would prove invaluable in what came next.
              </p>

              <h3 className="mb-4 mt-8 text-2xl font-bold">The Breakthrough</h3>
              <p>
                We produced a professional infomercial that didn&#t just showcase the product — it told a story. Running on the Golf Channel, it reached passionate golfers who understood the value of improving their game. But we didn&#t stop there.
              </p>
              <p>
                Our multi-channel marketing strategy ensured the V-Harness was everywhere golfers looked:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Professional infomercial running on Golf Channel</li>
                <li>Strategic social media presence across YouTube, Facebook, and Twitter</li>
                <li>Targeted Google and Facebook advertising campaigns</li>
                <li>Email marketing that turned viewers into customers</li>
              </ul>

              <h3 className="mb-4 mt-8 text-2xl font-bold">The Results</h3>
              <p>
                The numbers tell the story: In just 12 months, a prototype transformed into a $1.1 million business. But this isn&#t just about numbers — it&#s about what happens when you combine innovative product development with strategic marketing and authentic professional endorsement.
              </p>

              <h3 className="mb-4 mt-8 text-2xl font-bold">From Concept to Cash Flow</h3>
              <p>
                This isn&#t just a story about marketing a product. It&#s about understanding how to take an entrepreneur&#s dream and turn it into market reality. While others might have seen just another golf training aid, we saw an opportunity to create something special.
              </p>
              <p>
                In an industry where countless training aids come and go, we helped Foundation Golf do what few achieve: turn an idea into a million-dollar success story.
              </p>
            </div>
          </article>
        </Layout>
      </main>
    </>
  );
}
