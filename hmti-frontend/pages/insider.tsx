import { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import InsiderHead from "@/components/insider/insiderhead";
import InsiderContent from "@/components/insider/insidercontent";
import InsiderStack from "@/components/insider/insiderstack";

const Insider: NextPage = () => {
  return (
    <>
      <Head>
        <title>Behind of Web HMTI</title>
        <meta name="description" content="Bersama prabu meraih impian sejak 2015" />
      </Head>
       <div>
        <section className="sticky top-0 w-full z-[100]">
          <Navbar/>
        </section>
        <section>
          <InsiderHead/>
        </section>
        <section className="my-16">
          <InsiderContent/>
        </section>
        <section>
          <InsiderStack/>
        </section>
        <section className="">
          <Footer/>
        </section>
      </div>
    </>
  );
};

export default Insider;