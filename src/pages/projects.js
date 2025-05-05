import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/natural-treatments.png";
import proj2 from "../../public/images/projects/solar-success.png";
import proj3 from "../../public/images/projects/garage-golfchannel.png";
//import proj4 from "../../public/images/projects/portfolio-cover-image.jpg";
//import proj5 from "../../public/images/projects/agency-website-cover-image.jpg";
//import proj6 from "../../public/images/projects/devdreaming.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import { decodeHTML } from "../../decodeHTML";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center justify-between rounded-sm border
      border-solid border-dark bg-light p-12 dark:border-light dark:bg-dark lg:flex-col 
      lg:p-8 xs:p-4"
    >
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-sm lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={decodeHTML(title)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {decodeHTML(type)}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {decodeHTML(title)}
          </h2>
        </Link>
        <p className=" my-2 rounded-sm font-medium text-dark dark:text-light sm:text-sm">
          {decodeHTML(summary)}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-sm
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label={decodeHTML(title)}
          >
            {decodeHTML("Visit Project")}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-sm 
      border border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark xs:p-4"
    >
      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-sm"
      >
        <FramerImage
          src={img}
          alt={decodeHTML(title)}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {decodeHTML(type)}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {decodeHTML(title)}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded-sm text-lg
            font-medium underline md:text-base
            "
            aria-label={decodeHTML(title)}
          >
            {decodeHTML("Visit")}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>{decodeHTML("Modern Portfolio Built with Nextjs | Projects Page")}</title>
        <meta
          name="description"
          content={decodeHTML("Discover the latest webapp projects created by CodeBucks, a Next.js developer with expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio.")}
        />
      </Head>

      <TransitionEffect />
      <main className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}>
        <Layout className="pt-16">
          <AnimatedText
            text={decodeHTML("Case Studies")}
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type={decodeHTML("Featured Project")}
                title={decodeHTML("From Crisis to Comeback")}
                summary={decodeHTML("A natural cancer clinic went from near-bankruptcy to $3.6M revenue in one year. Our digital transformation turned 1,875 annual treatments into 9,000, helping achieve 80% patient remission rates. See how we made it happen.")}
                img={proj1}
                link="/dying-cancer-clinic-revival"
              />
            </div>
            
            <div className="col-span-12">
              <FeaturedProject
                type={decodeHTML("Featured Project")}
                title={decodeHTML("Scaling Solar Success")}
                summary={decodeHTML("Delivering over 180 qualified solar leads in 3 months, we helped transform a solar company&#8217;s reach. Result? $480K in new revenue, 5x more closed deals, and hundreds more families saving 30-50% on energy bills.")}
                img={proj2}
                link="/scaling-success"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type={decodeHTML("Featured Project")}
                title={decodeHTML("Million Dollar Product")}
                summary={decodeHTML("From garage prototype to $1.1M in sales: See how we transformed a golf training aid into a Golf Channel sensation. With PGA Tour pro backing and strategic marketing, this startup&#8217;s journey shows what&#8217;s possible with the right plan.")}
                img={proj3}
                link="/garage-to-golf-channel-success"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
