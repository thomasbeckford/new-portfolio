import Main from "../components/Templates/Main";
import Navbar from "../components/Organisms/Navbar";
import Footer from "../components/Templates/Footer";
import Projects from "../components/Templates/Projects";
import Experience from "../components/Templates/Experience";
import Head from "next/head";
import FloatingWhatsapp from "../components/Atoms/FloatingWhatsapp";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Thomas Portfolio</title>
        <meta property="og:title" content="Titulo social de la landing" />
        <meta
          property="og:description"
          content="Descripcion social de la landing"
        />
        <meta name="description" content="Descripcion de landing" key="desc" />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
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
