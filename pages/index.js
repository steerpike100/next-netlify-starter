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
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
          <img
            src="images/hector_one.jpg"
            alt="Hector needs a poo"
            width="500"
            height="600"
          ></img>
        </p>
      </main>

      <Footer />
    </div>
  );
}
