import Main from "../components/Templates/Main";
import Navbar from "../components/Organisms/Navbar";
import Footer from "../components/Templates/Footer";
import Projects from "../components/Templates/Projects";
import Experience from "../components/Templates/Experience";
import Head from "next/head";
import FloatingWhatsapp from "../components/Atoms/FloatingWhatsapp";
import AnimatedIntro from "../components/Templates/AnimatedIntro";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(false);
    }, 2000);
  }, []);

  return (
    <main id="main" className="bg-slate-700 text-white">
      <Head>
        <title>Thomas E. Beckford</title>
        <meta property="og:title" content="Thomas E. Beckford" key="title" />
        <meta property="og:description" content="Thomas E. Beckford" />
        <meta name="description" content="Thomas E. Beckford" key="desc" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>

      <AnimatedIntro isAnimated={isAnimated} />

      <div className={isAnimated ? "hidden" : "animate animate-fadeIn"}>
        <Navbar />
        <Main />

        <Experience />
        <Projects />
        {/* <Contact /> */}
        <Footer />

        <FloatingWhatsapp />
      </div>
    </main>
  );
}
