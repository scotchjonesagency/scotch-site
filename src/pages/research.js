// pages/research.js
import Head from "next/head";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";

// Where "Buy the research" sends the reader (the short application).
const BUY_URL = "#buy";
const SIGN_UP_URL = "/booking";

const P = ({ children }) => (
  <p className="mb-6 text-lg leading-relaxed text-dark dark:text-light">{children}</p>
);

const H2 = ({ children }) => (
  <h2 className="mt-16 mb-6 text-3xl font-bold text-dark dark:text-light sm:text-2xl">{children}</h2>
);

const H3 = ({ children }) => (
  <h3 className="mt-8 mb-3 text-xl font-bold text-dark dark:text-light">{children}</h3>
);

const Quote = ({ children, cite }) => (
  <blockquote className="mb-6 border-l-4 border-primary pl-4 text-lg italic leading-relaxed text-dark dark:text-light dark:border-light">
    {children}
    {cite && <span className="mt-1 block text-base not-italic opacity-75">({cite})</span>}
  </blockquote>
);

const Product = ({ name, price, children }) => (
  <div className="flex flex-col rounded-lg border-2 border-solid border-dark p-6 dark:border-light">
    <h3 className="mb-2 text-xl font-bold text-dark dark:text-light">{name}</h3>
    <p className="mb-4 text-2xl font-bold text-primary dark:text-light">{price}</p>
    <div className="text-lg leading-relaxed text-dark dark:text-light">{children}</div>
  </div>
);

const BUTTON_CLASS =
  "inline-block rounded-lg border-2 border-solid border-dark bg-dark px-8 py-3 text-lg font-semibold text-light hover:bg-light hover:text-dark dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light";

const BuyButton = () => (
  <a href={BUY_URL} className={BUTTON_CLASS}>
    Buy the research
  </a>
);

const SignUpButton = () => (
  <a href={SIGN_UP_URL} className={BUTTON_CLASS}>
    Sign me up
  </a>
);

export default function Research() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.clarity === "function") {
      window.clarity("set", "player", "site");
      window.clarity("set", "page_version", "rp-v0.4");
      window.clarity("set", "structure", "spin-8");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Patient Research for Your Cash-Pay Fatigue Program | Scotch Jones Company</title>
        <meta
          name="description"
          content="The Waitlist Groundwork and The Waitlist Blueprint: patient research for the owner of a cash-pay fatigue program, in patients' own words."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <article className="mx-auto max-w-3xl px-4">
            <section id="s1-lead">
              <h1 className="mb-10 text-center text-5xl font-bold leading-tight text-dark dark:text-light sm:text-4xl xs:text-3xl">
                Your patients have already said why they&#8217;d pay for your fatigue program. Just not to you.
              </h1>
              <P>
                They said it in 3,059 reviews of clinics like yours, and in 55,170 comments under posts where patients
                talk about fatigue, their clinics and the people who treat them.
              </P>
              <Quote>&#8220;It wasn&#8217;t cheap and it wasn&#8217;t easy but honestly it was the best thing I could have done.&#8221;</Quote>
              <Quote>&#8220;I paid $4,000 for roughly that, so yes&#8221;</Quote>
              <Quote>&#8220;I wish I had this information years ago and I truly hope this helps someone else&#8221;</Quote>
            </section>

            <section id="s2-problem">
              <H2>Why almost no owner reads it</H2>
              <P>
                Those reviews and comments are spread over thousands of pages, and most of what&#8217;s on them is about
                something else. Reading them takes the hours an owner spends seeing patients. So the marketing for most
                cash-pay fatigue programs gets built on a best guess about what patients want.
              </P>
              <P>One owner says it plainly:</P>
              <Quote cite="functional medicine practice, 20+ years">
                &#8220;Once you&#8217;re cash pay, you&#8217;ve left the main patient steering hose of insurance directories
                behind, so you have to hustle with ads, emails, and social media. I wish I could tell you that I have this
                figured out, but I don&#8217;t.&#8221;
              </Quote>
              <P>That isn&#8217;t the owner&#8217;s fault. What patients said was never in one place.</P>
            </section>

            <section id="s3-implication">
              <H2>Here&#8217;s what a guess costs</H2>
              <P>One owner of a cash-pay practice wrote this after the first year:</P>
              <Quote cite="owner, cash chiropractic practice">
                &#8220;We did marketing our first year like a shotgun approach and just hoped something stuck. That was
                thousands of dollars we wish we could get back.&#8221;
              </Quote>
              <P>
                The money is the part you can see. The part you can&#8217;t is who the ad brought in. An ad written from a
                guess talks about labs and protocols, because that&#8217;s what the clinic sells. The patient wasn&#8217;t
                shopping for labs. So the ad reaches the wrong person, or the right person scrolls past, and the owner
                finds out in the consult, after the hour is gone.
              </P>
              <P>
                So who gets it right? The people who stopped guessing. In my trade it&#8217;s an old rule. Gary
                Bencivenga, one of the most successful copywriters who ever lived, put it this way: &#8220;It took me a
                while to realize that the best copywriters are the most tenacious researchers. Like miners, they dig,
                drill, dynamite, and chip until they&#8217;ve liberated carloads of valuable ore.&#8221; He spent at least
                a third of every project on research before writing a word.
              </P>
            </section>

            <section id="s4-payoff">
              <H2>Here&#8217;s what the research changes</H2>
              <P>
                When the ad uses the patient&#8217;s own words, the right patient recognizes herself in the first line. She
                clicks because it sounds like her, not like a clinic. The consult starts further along, because she already
                read what she came to ask. And the owner stops rewriting the ad every month, because the words weren&#8217;t
                a guess to begin with.
              </P>
              <P>What&#8217;s that worth on a program priced at $1,500 and up? Your patients have answered that too:</P>
              <Quote>&#8220;This is definitely an investment in yourself; to me, it was worth every penny&#8221;</Quote>
              <Quote>
                &#8220;I&#8217;ve been in treatment for one year next week. I have spent about 3k to date ... I am thrilled to
                report that I feel better than I have in what feels like forever&#8221;
              </Quote>
              <P>The research is how you find out what they were paying for before you write one more ad.</P>
            </section>

            <section id="s5-mechanism">
              <H2>Here&#8217;s how it was done</H2>
              <ol className="mb-6 list-decimal space-y-4 pl-6 text-lg leading-relaxed text-dark dark:text-light">
                <li>
                  <strong>Read.</strong> 3,059 public reviews of clinics that treat fatigue, and 1,530 posts with 55,170
                  comments where patients talk about fatigue, their clinics and the people who treat them. Nothing
                  paraphrased.
                </li>
                <li>
                  <strong>Sorted.</strong> Every line filed by topic: what they came in with, what they&#8217;d been told
                  before, what they paid and what they said about the price, what they were afraid of, what made them
                  choose one clinic over another, what they said afterwards. That&#8217;s the Groundwork.
                </li>
                <li>
                  <strong>Pointed at your clinic.</strong> Your patients&#8217; reviews, your competitors&#8217; patients,
                  your area, read the same way. Then what it means: the objections your ads have to answer, the words to
                  use and the words to avoid, and what patients say right before they book. That&#8217;s the Blueprint.
                </li>
              </ol>
              <P>Every ad I write starts here, and so does the pre-screen and the follow-up. Nothing on a template.</P>
            </section>

            <section id="s6-proof">
              <H2>What it looks like when the ads are written from it</H2>
              <P>
                At one clinic that treats fatigue, the ads were written from this research. Ten bookings for every $155 of
                ad spend. $57 of ad spend for every paying patient. Counted on the clinic&#8217;s own calendar and books,
                not on the ad platform&#8217;s report.
              </P>
              <P>
                One clinic, one campaign. I&#8217;m not promising you those numbers. I&#8217;m showing you where the words
                came from.
              </P>
              <P>
                A limit, so you know: the research covers patients of cash-pay fatigue programs priced around $1,500 and
                up. If your program is priced well below that, it will read like someone else&#8217;s patients.
              </P>
            </section>

            <section id="s7-offer">
              <H2>Here&#8217;s what you can buy</H2>
              <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-1">
                <Product
                  name="The Waitlist Groundwork: Patient Research for Your Cash-Pay Fatigue Program"
                  price="$2,499"
                >
                  The market research, in patients&#8217; own words, sorted by topic. What they came in with, what
                  they&#8217;d been told, what they paid, what they feared, what made them choose, what they said
                  afterwards. No analysis. You read it and draw your own conclusions.
                </Product>
                <Product
                  name="The Waitlist Blueprint: Patient Research &amp; Insights for Your Cash-Pay Fatigue Program"
                  price="$5,750"
                >
                  <p className="mb-3">Everything in the Groundwork, plus:</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      The three things your patients are really paying for. It isn&#8217;t the labs or the protocol.
                      It&#8217;s what they were looking for before they ever found you, and it&#8217;s what every ad and
                      page I write for you is built around.
                    </li>
                    <li>Research on your clinic: your patients, your competitors&#8217; patients, your area.</li>
                    <li>
                      What it means: why your patients chose you, why others in your area went somewhere else, and
                      where your clinic stands next to them, in patients&#8217; own words.
                    </li>
                    <li>
                      Why patients don&#8217;t book: the doubts that stop them, and the answer each one needs before
                      they&#8217;ll pick up the phone or fill out a form.
                    </li>
                    <li>The words to use and avoid, and what patients say right before they book.</li>
                    <li>What your competitors&#8217; ads say, and what they leave out.</li>
                  </ul>
                </Product>
              </div>

              <H3>Is there a catch?</H3>
              <P>
                Two. Both reports are for the owner of a cash-pay fatigue program priced around $1,500 and up. And each
                report takes about seven days to deliver, because it&#8217;s put together for you, not pulled off a shelf.
                Once it&#8217;s delivered, it&#8217;s yours, and the sale is final. You can&#8217;t un-read research.
              </P>

              <H3>What&#8217;s in the Blueprint and not in the Groundwork</H3>
              <P>
                The three things your patients are really paying for. The research is plain about them, and they
                aren&#8217;t the labs or the protocol. Once an owner has read them, the website, the posts, the emails and
                the program itself read differently. You&#8217;re welcome to work them out from the Groundwork yourself.
              </P>

              <H3>Is there a way to get the Groundwork without buying it?</H3>
              <P>
                There is. The Free 7-Day Working Interview: let me run your ads for one week, you cover the $500 ad spend,
                and the Groundwork is yours to keep whether you keep me or not. Clients get the Blueprint.
              </P>
            </section>

            <section id="s8-action">
              <H2>Here&#8217;s how to buy</H2>
              <P>
                Answer a few quick questions about your program, so I know which report fits and that the research will
                read like your patients. If it fits, I send the invoice. If it doesn&#8217;t, I&#8217;ll tell you why. Not
                because it&#8217;s bad, and you&#8217;ve lost two minutes.
              </P>
              <div id="buy" className="my-10 text-center">
                <BuyButton />
              </div>
              <P>
                Nick Koken
                <br />
                The Scotch Jones Conversion Company
              </P>
              <P>
                P.S. You may have missed it, but if you sign up for the Free 7 Day working interview, the Waitlist
                Groundwork is free. And if you become a client I send you a copy of the Waitlist Blueprint, the one I
                charge $5,750 for, as a thank you for signing up.
              </P>
              <div className="my-10 text-center">
                <SignUpButton />
              </div>
            </section>
          </article>
        </Layout>
      </main>
    </>
  );
}
