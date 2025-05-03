import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import { decodeHTML } from "../../decodeHTML";

export default function ScalingSuccess() {
  return (
    <>
      <Head>
        <title>{decodeHTML("Scaling Solar Success | Case Study")}</title>
        <meta
          name="description"
          content={decodeHTML("How we helped a solar company scale impact, generate revenue, and transform more lives.")}
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={decodeHTML("Scaling Solar Success")}
            className="mb-16 !text-6xl text-center lg:!text-5xl sm:!text-4xl xs:!text-3xl"
          />
          <article className="mx-auto max-w-5xl text-lg font-medium leading-relaxed">
            <div className="mx-auto max-w-4xl text-lg leading-relaxed text-dark dark:text-light space-y-6">
              <h2 className="mb-6 text-4xl font-bold">
                {decodeHTML("How We Helped a Solar Company Transform More Lives")}
              </h2>

              <p>
                {decodeHTML("When a leading solar company approached us, they weren&#8217;t just looking to grow – they were on a mission to help more families escape crushing utility costs. They had the solution: high-quality solar installations that could save homeowners 30–50% on their energy bills. They had the expertise. They had the track record. What they needed was a partner who could connect them with the families who needed them most.")}
              </p>

              <h2 className="text-2xl font-bold mt-10">
                {decodeHTML("The Challenge")}
              </h2>
              <p>
                {decodeHTML("In a market where utility rates had more than doubled in ten years, this solar company knew they could make a difference. They were watching California families face unprecedented rate hikes – some regions paying the fourth-highest electricity rates in the world. The company had already helped hundreds of homeowners break free from these rising costs, but they knew thousands more needed their help.")}
              </p>
              <p>{decodeHTML("They needed to scale their impact. Fast.")}</p>

              <h2 className="text-2xl font-bold mt-10">
                {decodeHTML("Our Solution")}
              </h2>
              <p>
                {decodeHTML("We implemented a sophisticated appointment-setting system that amplified their reach. While other agencies struggled to set 60 appointments, we delivered 180 qualified opportunities in just three months. Our approach didn&#8217;t just fill their calendar – it filled it with the right kind of appointments: families ready to take control of their energy future.")}
              </p>

              <h2 className="text-2xl font-bold mt-10">
                {decodeHTML("The Transformation")}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>{decodeHTML("Generated $482,000 in new revenue in just three months")}</li>
                <li>{decodeHTML("Delivered 5x more closed deals than competing agencies")}</li>
                <li>{decodeHTML("Helped the company expand their impact dramatically")}</li>
                <li>{decodeHTML("Enabled them to protect more families from utility rates projected to rise 39% by 2026")}</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10">
                {decodeHTML("Empowering Growth, Enabling Impact")}
              </h2>
              <p>
                {decodeHTML("This wasn&#8217;t just about setting appointments – it was about empowering a solar company to reach more families who desperately needed their help. While utility companies announced rate hike after rate hike – some increasing bills by 65% in just three years – this company could now reach and help more households than ever before.")}
              </p>

              <p>{decodeHTML("Thanks to our partnership, they could:")}</p>
              <ul className="list-disc list-inside space-y-2">
                <li>{decodeHTML("Help more families lock in their energy costs for 25 years")}</li>
                <li>{decodeHTML("Protect more households from projected annual increases of 10.4%")}</li>
                <li>{decodeHTML("Save more Californians from the nation&#8217;s most expensive power rates")}</li>
                <li>{decodeHTML("Scale their positive impact on the community")}</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10">
                {decodeHTML("From Good to Great")}
              </h2>
              <p>
                {decodeHTML("This is a story about helping a great company become even better. While they focused on delivering exceptional solar solutions, we ensured their calendar stayed full of qualified appointments. Together, we created a powerful engine for growth – one that helped them transform more lives, save more families money, and make energy independence accessible to more Californians than ever before.")}
              </p>
              <p>
                {decodeHTML("In an era of record-breaking utility rates, we didn&#8217;t just help a company grow – we helped them multiply their positive impact on the community.")}
              </p>
            </div>
          </article>
        </Layout>
      </main>
    </>
  );
}
