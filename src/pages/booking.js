// pages/booking.js
import Head from "next/head";
import Layout from "@/components/Layout";

export default function Booking() {
  return (
    <>
      <Head>
        <title>Book a Call | Scotch Jones Agency</title>
        <meta name="description" content="Schedule your free consultation with Scotch Jones Marketing Agency." />
      </Head>

      <Layout className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Book Your Free Consultation
        </h1>

        <div className="w-full max-w-3xl h-[700px]">
          <iframe
            src="https://calendly.com/nick-scotchjones/30min" // Replace with your Calendly link
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-lg shadow-md"
            allowFullScreen
          ></iframe>
        </div>
      </Layout>
    </>
  );
}
