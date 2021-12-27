import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hector's Groovy Website!" />
        <p className="description">
          <img
            src="/hector_one.jpeg"
            alt="Hector needs a pood"
            width="500"
            height="600"
          ></img>
        </p>
        <body></body>
      </main>

      <Footer />
    </div>
  );
}
