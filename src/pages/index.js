import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/lighthouse-square.png";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
      <link rel="manifest" href="/site.webmanifest.json" />
        <title>The Scotch Jones Marketing Agency</title>
        <meta
          name="description"
          content="The Scotch Jones Agency is the premiere marketing agency
          for small business owners. We help small business grow."
        />
      </Head>

      <TransitionEffect />

      <article className="flex items-center text-dark dark:text-light sm:items-start">
      <Layout className="pt-0 md:pt-4 sm:pt-2">
  <div className="flex w-full flex-wrap items-start justify-between md:flex-col">
    {/* IMAGE */}
    <div className="order-2 w-1/2 lg:order-1 lg:w-full">
      <Image
        src={profilePic}
        alt="Scotch Jones"
        className="h-auto w-full"
        width={580}
        height={580}
        priority
        loading="eager"
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0vMjQ/QUE7QT47Pi89RUpJTk5QVVlZVjo6W2FZWWj/2wBDARUXFyAeIBogICBoRj5GaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>

    {/* TEXT */}
    <div className="order-1 flex w-1/2 flex-col items-center self-center -mt-20 md:-mt-12 sm:-mt-8 lg:order-2 lg:w-full lg:text-center">
      <AnimatedText
        text="We Help Small Business Grow"
        className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
      />
      <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
        The Scotch Jones Agency has engineered $12.8M in client revenue through our proven growth system. While others promise leads, we deliver complete customer acquisition that transforms your marketing spend into predictable, sustainable growth. 
      </p>
      <div className="mt-2 flex items-center self-start lg:self-center">
        <Link
          href="/booking"
          target="_blank"
          className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
          
        >
          Get Your Free Marketing Analysis <LinkArrow className="ml-1 !w-6 md:!w-4" />
        </Link>
      </div>
    </div>
  </div>
</Layout>

      {/* <HireMe /> */}
      </article>
    </>
  );
}
