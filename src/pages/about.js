import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { decodeHTML } from "../../decodeHTML";
import Link from 'next/link';

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>About Us Page</title>
        <meta name="description" content="Transform Your Business Growth With a Complete Digital Marketing System." />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <section className="max-w-3xl mx-auto px-4">
            <AnimatedText
              text="About Us"
              className="mb-16 text-center !text-5xl !leading-tight sm:!text-4xl xs:!text-3xl sm:mb-8"
            />

             <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              {decodeHTML("For seven years, we have been transforming how service businesses grow. We&#8217;re not just another marketing agency &#8212; we&#8217;re a complete lead generation and sales optimization partner.")}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              {decodeHTML("While other agencies focus solely on generating leads, we understand that true business growth requires mastery of the entire customer acquisition process. From first click to qualified appointment, we manage every step of your lead generation journey.")}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              {decodeHTML("Our track record speaks for itself:")}
            </p>

            <ul className="list-disc pl-6 text-lg leading-relaxed text-dark dark:text-light mb-6">
              <li>{decodeHTML("Generated $11.7 million in revenue for clients over seven years")}</li>
              <li>{decodeHTML("Transformed a struggling clinic from near-bankruptcy to $1.8+ million in annual revenue")}</li>
              <li>{decodeHTML("Increased a client&#8217;s service delivery by nearly 400% in their first year")}</li>
              <li>{decodeHTML("Set 180 qualified appointments in just three months for another client")}</li>
              <li>{decodeHTML("Consistently deliver 3&#8211;5x better results than competing agencies")}</li>
            </ul>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              {decodeHTML("What sets us apart isn&#8217;t just our comprehensive approach &#8212; it&#8217;s our deep understanding of what makes leads convert. Our team has hands-on experience in every aspect of the lead generation process. This real-world expertise allows us to optimize every step of your customer journey.")}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              {decodeHTML("We manage your:")}
            </p>

            <ul className="list-disc pl-6 text-lg leading-relaxed text-dark dark:text-light mb-6">
              <li>{decodeHTML("Social media & PPC search advertising")}</li>
              <li>{decodeHTML("Lead qualification and nurturing")}</li>
              <li>{decodeHTML("Appointment setting and scheduling")}</li>
              <li>{decodeHTML("Sales pipeline optimization")}</li>
              <li>{decodeHTML("Follow-up systems and processes")}</li>
            </ul>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              {decodeHTML("Our clients focus on what they do best &#8212; serving their customers. We handle everything else up to that final conversation.")}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              {decodeHTML("We believe in thinking differently. While other agencies chase trendy tactics, we focus on what actually drives revenue. Our out-of-the-box thinking and results-focused approach have helped businesses across multiple industries achieve dramatic growth.")}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light font-semibold">
              {decodeHTML("Time to stop hoping for growth and start engineering it. Ready to see what your business is truly capable of?")}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-center">
              <Link
                href="/booking"
                className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition duration-300"
                >
                  SCHEDULE YOUR FREE MARKETING REVIEW
              </Link>
            </p>

            <div className="flex justify-between mt-12 text-center gap-4 flex-wrap">
              <div className="flex-1">
                <p className="text-5xl font-bold"><AnimatedNumberFramerMotion value={11} />+</p>
                <p className="text-base text-dark/75 dark:text-light/75">Millions of Dollars in Revenue Generated for Clients</p>
              </div>

              <div className="flex-1">
                <p className="text-5xl font-bold"><AnimatedNumberFramerMotion value={7} />+</p>
                <p className="text-base text-dark/75 dark:text-light/75">Years of Experience</p>
              </div>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
}
