import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import { decodeHTML } from "../../decodeHTML";

export default function DyingCancerClinic() {
  return (
    <>
      <Head>
        <title>{decodeHTML("Dying Cancer Clinic Revival | Case Study")}</title>
        <meta
          name="description"
          content={decodeHTML("Read how we helped a struggling natural cancer clinic grow into a multi-million dollar success story, reaching thousands of patients and saving lives.")}
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={decodeHTML("From Crisis to Comeback")}
            className="mb-16 !text-6xl text-center lg:!text-5xl sm:!text-4xl xs:!text-3xl"
          />

          <article className="mx-auto max-w-5xl text-lg font-medium leading-relaxed">
            <div className="mx-auto max-w-4xl text-lg leading-relaxed text-dark dark:text-light space-y-6">
              <h2 className="mb-6 text-4xl font-bold">{decodeHTML("How We Rescued a Dying Cancer Clinic and Transformed It Into a Multi-Million Dollar Success Story")}</h2>

              <p>
                {decodeHTML("In late winter one year, a natural cancer doctor in Arizona faced a heartbreaking decision. Her natural cancer clinic was about to close its doors forever. Despite offering innovative natural treatments and hope to cancer patients seeking alternative options, the clinic was drowning in silence – invisible to the very people desperately searching for their services.")}
              </p>

              <p>
                {decodeHTML("The numbers were grim. Less than one new patient a week. Empty treatment rooms. A website that failed to reach those in need. Advertising dollars vanishing into the digital void. Eight years of struggle had led to this moment of crisis.")}
              </p>

              <p className="font-semibold">
                {decodeHTML("But sometimes, rock bottom becomes the foundation for extraordinary success.")}
              </p>

              <h2 className="text-2xl font-bold mt-10">{decodeHTML("The Turning Point")}</h2>
              <p>
                {decodeHTML("Enter our team. We saw what others missed – a life-changing treatment center that just needed the right voice to reach its audience. We immediately implemented a complete digital transformation:")}
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>{decodeHTML("Rebuilt their website from the ground up")}</li>
                <li>{decodeHTML("Engineered their online presence to dominate search results")}</li>
                <li>{decodeHTML("Transformed their Google Ads from money-drains to patient-magnets")}</li>
                <li>{decodeHTML("Created a compelling social media presence that built trust and awareness")}</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10">{decodeHTML("The Transformation")}</h2>
              <p>
                {decodeHTML("The results weren&#8217;t just dramatic – they were revolutionary. In the first year alone, the clinic exploded from 1,875 annual treatments to an astounding 9,000. Treatment revenues soared from $250 to $400 per session. A clinic that had been considering bankruptcy was suddenly generating over $3.6 million in annual revenue.")}
              </p>
              <p>
                {decodeHTML("But this was just the beginning. Over the next six years, the clinic delivered 28,000 treatments. Annual revenue stabilized at over $1.8 million – a staggering 398% increase from their darkest days. In total, we helped generate approximately $11.2 million in revenue.")}
              </p>

              <h2 className="text-2xl font-bold mt-10">{decodeHTML("Beyond the Numbers: Lives Transformed")}</h2>
              <p>
                {decodeHTML("This isn&#8217;t just a story about business success. It&#8217;s about the thousands of cancer patients who finally found hope because they could now find this clinic online. The proof? An extraordinary 80% of patients who completed their metabolic treatments went into confirmed or assumed remission. For those who also followed the clinic&#8217;s food plan, that number jumped to 85%.")}
              </p>
            </div>
          </article>
        </Layout>
      </main>
    </>
  );
}
