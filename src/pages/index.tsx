import Main from "../components/Templates/Main";
import Navbar from "../components/Organisms/Navbar";
import Footer from "../components/Templates/Footer";
import Projects from "../components/Templates/Projects";
import Experience from "../components/Templates/Experience";
import Head from "next/head";
import FloatingWhatsapp from "../components/Atoms/FloatingWhatsapp";
import AnimatedIntro from "../components/Templates/AnimatedIntro";
import { useEffect, useState } from "react";
import { Varela_Round } from "next/font/google";
import dynamic from "next/dynamic";
import BubblesBackground from "../components/Molecules/BubblesBackground";

const varela_round = Varela_Round({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(false);
    }, 1300);
  }, []);

  return (
    <main
      id="main"
      className={` text-slate-50 ${varela_round.className}  bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-20% to-blue-800 to-90% `}
    >
      <Head>
        <title>Thomas E. Beckford</title>
        <meta property="og:title" content="Thomas E. Beckford" key="title" />
        <meta property="og:description" content="Thomas E. Beckford" />
        <meta name="description" content="Thomas E. Beckford" key="desc" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>

      <AnimatedIntro isAnimated={isAnimated} />

      <div className={isAnimated ? "hidden" : "animate animate-fadeIn "}>
        <div className="hidden md:block">
          <BubblesBackground />
        </div>

        <Navbar />
        <Main />
        <Experience />
        <Projects />
        <Footer />
        <FloatingWhatsapp />
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={["a", "button", ".link", ".hover-img"]}
        />
      </div>
    </main>
  );
}
