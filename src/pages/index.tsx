import Main from "../components/Templates/Main";
import Navbar from "../components/Organisms/Navbar";
import Footer from "../components/Templates/Footer";
import Projects from "../components/Templates/Projects";
import Experience from "../components/Templates/Experience";
import Head from "next/head";
import FloatingWhatsapp from "../components/Atoms/FloatingWhatsapp";
import Image from "next/image";
import Text from "../components/Atoms/Text";

export default function Home() {
  const nextSection = () => {
    const ele = document.getElementById("experience");
    if (ele) ele.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-slate-700 text-white">
      <Head>
        <title>Thomas E. Beckford</title>
        <meta property="og:title" content="Thomas E. Beckford" key="title" />
        <meta property="og:description" content="Thomas E. Beckford" />
        <meta name="description" content="Thomas E. Beckford" key="desc" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <Main />

      <div className="grid place-items-center h-24 bg-slate-500 ">
        <div
          className="flex items-center gap-5 cursor-pointer hover:scale-110 transform transition-all duration-500 ease-in-out"
          onClick={nextSection}
        >
          <Image
            src="/arrow-down-circle.svg"
            className="mx-auto  cursor-pointer pb-5 mt-5 "
            width={50}
            height={50}
            alt="arrow"
          />
          <Text className="font-bold text-xl">Learn more about Thomas</Text>
        </div>
      </div>

      <Experience />
      <Projects />
      {/* <Contact /> */}
      <Footer />

      <FloatingWhatsapp />
    </main>
  );
}
