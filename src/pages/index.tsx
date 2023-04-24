import Main from "../components/Templates/Main";
import Navbar from "../components/Organisms/Navbar";
import Footer from "../components/Templates/Footer";
import Projects from "../components/Templates/Projects";
import Experience from "../components/Templates/Experience";
import Head from "next/head";
import FloatingWhatsapp from "../components/Atoms/FloatingWhatsapp";

export default function Home() {
  return (
    <main id="main" className="bg-slate-700 text-white">
      <Head>
        <title>Thomas E. Beckford</title>
        <meta property="og:title" content="Thomas E. Beckford" key="title" />
        <meta property="og:description" content="Thomas E. Beckford" />
        <meta name="description" content="Thomas E. Beckford" key="desc" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <Main />

      <Experience />
      <Projects />
      {/* <Contact /> */}
      <Footer />

      <FloatingWhatsapp />
    </main>
  );
}
