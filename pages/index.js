import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, benefitThree } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>STITCHSWIFT</title>
        <meta
          name="description"
          content="STITCHSWIFT is a pioneering tailoring app that redefines the landscape of personalized fashion
          by seamlessly merging traditional craftsmanship with cutting-edge technology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="ABOUT US"
        title="Purpose">
        STITCHSWIFT is a pioneering tailoring app that redefines the landscape of personalized fashion
        by seamlessly merging traditional craftsmanship with cutting-edge technology. Our platform is
        meticulously crafted to provide users with an unparalleled tailoring experience, allowing them to
        effortlessly transform their sartorial visions into reality.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />

      {/* <Cta /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;