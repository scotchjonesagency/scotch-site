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
        <title>Time To Stop Hoping For Growth And Start Engineering It | About Page</title>
        <meta name="description" content="Transform Your Business Growth With a Complete Digital Marketing System." />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <section className="max-w-3xl mx-auto px-4">
            <AnimatedText
              text="Time To Stop Hoping For Growth And Start Engineering It"
              className="mb-16 text-center !text-5xl !leading-tight sm:!text-4xl xs:!text-3xl sm:mb-8"
            />

            <h2 className="mb-6 text-4xl font-bold">
              {decodeHTML("How We&#8217;ve Generated $12.8 Million In Revenue For Clients...")}
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              <strong>Ready to see what your business is truly capable of?</strong>
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              Dear Business Owner,
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              Let me ask you something...<br />
              {decodeHTML("When was the last time you looked at your competitors online and wondered how they&#8217;re getting all those customers? How they seem to always be busy while you&#8217;re still relying on word-of-mouth and referrals?")}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              {decodeHTML("Here&#8217;s a shocking truth: 81% of your potential customers are looking for your services online right now. But they&#8217;re finding your competitors instead of you.")}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              {decodeHTML("I know because I&#8217;ve spent the last seven years helping business owners like you transform their marketing from a money pit into a profit machine. And I&#8217;ve discovered something most marketing agencies don&#8217;t want you to know:")}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              <strong>{decodeHTML("Getting leads isn&#8217;t the problem. Converting them into revenue is where most businesses fail.")}</strong>
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              Let me show you what I mean...
            </p>

            <ul className="list-disc pl-6 text-lg leading-relaxed text-dark dark:text-light mb-6">
              <li>Transformed a struggling clinic from near-bankruptcy to $1.8+ million in annual revenue</li>
              <li>Turned a simple product prototype into a $1.1 million success story in 12 months</li>
              <li>Set 180 qualified appointments in just three months (when competitors barely hit 60)</li>
              <li>Consistently delivered 3–5x better results than other agencies</li>
            </ul>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              {decodeHTML("But here&#8217;s what makes us different...")}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              While other agencies just throw leads at you and disappear, we manage your entire customer acquisition process. From the first click to the scheduled appointment, we handle everything except the final close.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              Think about that for a moment.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              What would your business look like if you:
            </p>

            <ul className="list-disc pl-6 text-lg leading-relaxed text-dark dark:text-light mb-6">
              <li>Never had to worry about where your next customer was coming from</li>
              <li>Had a consistent flow of qualified appointments on your calendar</li>
              <li>Could focus on serving customers instead of chasing them</li>
              <li>Had a complete system working 24/7 to generate revenue</li>
            </ul>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              <strong>{decodeHTML("Here&#8217;s How We Do It:")}</strong>
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              Our complete growth system manages:
            </p>

            <ul className="list-disc pl-6 text-lg leading-relaxed text-dark dark:text-light mb-6">
              <li>Your Facebook and Google advertising (that actually generates returns)</li>
              <li>Your lead qualification and nurturing (so you only talk to serious prospects)</li>
              <li>Your appointment setting and scheduling (filled with people ready to buy)</li>
              <li>Your sales pipeline optimization (turning leads into revenue)</li>
              <li>Your follow-up systems and processes (capturing sales others miss)</li>
            </ul>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              <strong>{decodeHTML("But Don&#8217;t Just Take My Word For It...")}</strong>
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              {decodeHTML("Remember that struggling clinic I mentioned? Before working with us, they were giving less than 1,900 treatments a year. Within 12 months of implementing our system, they had given almost 9,000 and were able to increase their prices 60%. That&#8217;s not just growth — that&#8217;s transformation.")}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              Now, I know what you might be thinking...
            </p>

            <ul className="list-disc pl-6 text-lg leading-relaxed text-dark dark:text-light mb-6">
              <li>{decodeHTML("&quot;I&#8217;ve tried marketing agencies before...&quot;")}</li>
              <li>{decodeHTML("&quot;I&#8217;ve wasted money on ads that didn&#8217;t work...&quot;")}</li>
              <li>{decodeHTML("&quot;I don&#8217;t have time to manage another vendor...&quot;")}</li>
            </ul>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              {decodeHTML("I get it. That&#8217;s exactly why we handle everything for you.")}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              <strong>{decodeHTML("Here&#8217;s What Happens When You Partner With Us:")}</strong>
            </p>

            <ol className="list-decimal pl-6 text-lg leading-relaxed text-dark dark:text-light mb-6">
              <li>{decodeHTML("We analyze your current marketing and identify revenue opportunities you&#8217;re missing")}</li>
              <li>We implement our complete growth system, customized for your business</li>
              <li>We manage everything — from ads to appointments</li>
              <li>You focus on what you do best: serving customers and closing deals</li>
            </ol>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              Think about it: If we could help you add just 2–3 new customers each month, what would that mean for your bottom line? $10,000? $20,000? More?
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              <strong>But You Need To Act Now...</strong><br />
              We only work with a limited number of clients in each industry to ensure we can deliver maximum results. Once these spots are filled, we start a waiting list.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              <strong>Ready to stop hoping for growth and start engineering it?</strong>
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              <strong>{decodeHTML("Here&#8217;s What To Do Next:")}</strong><br />
              {decodeHTML("Click below to schedule your free marketing review. We&#8217;ll analyze your current situation, identify hidden opportunities, and show you exactly how we can help transform your business.")}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              Still not sure? Consider this...
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              Every day you wait is another day your competitors are capturing those customers you should be serving. Another day of relying on hope instead of having a system.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              The time to act is now.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              To your success,<br /><br />
              Nick<br />
              Marketing Strategist<br />
              Scotch Jones Agency
            </p>

            <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">
              <strong>P.S.</strong> Remember: 81% of your potential customers are looking online right now. The only question is: will they find you?
            </p>

            <p className="mb-6 text-lg leading-relaxed text-center">
            <Link href="/booking" passHref>
              <a className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition duration-300"
              >
                SCHEDULE YOUR FREE MARKETING REVIEW
              </a>
            </Link>
            </p>

            <div className="flex justify-between mt-12 text-center gap-4 flex-wrap">
              <div className="flex-1">
                <p className="text-5xl font-bold"><AnimatedNumberFramerMotion value={12} />+</p>
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
