import Head from "next/head";
import Layout from "@/components/Layout";

export default function LegalPage({ title, description, updated, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | Scotch Jones Agency`}</title>
        <meta name="description" content={description} />
      </Head>

      <Layout className="flex flex-col items-center min-h-screen">
        <article className="w-full max-w-3xl [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1 [&_a]:underline">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-sm opacity-70 mb-8">Last updated: {updated}</p>
          {children}
        </article>
      </Layout>
    </>
  );
}
