// pages/booking.js
import Head from "next/head";
import Script from "next/script";
import Layout from "@/components/Layout";

export default function Booking() {
  return (
    <>
      <Head>
        <title>Book a Call | Scotch Jones Company</title>
        <meta name="description" content="Schedule your free consultation with Scotch Jones Conversion Company." />
      </Head>

      <Layout className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Book Your Free Consultation
        </h1>

        <div className="w-full max-w-3xl min-h-[700px]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/kWUoOrwI4OTn1Dx9Fd9D"
            id="kWUoOrwI4OTn1Dx9Fd9D_booking"
            title="Book a call"
            scrolling="no"
            style={{ width: "100%", minHeight: "700px", border: "none", overflow: "hidden" }}
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </Layout>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
