import HeroAbout from "@/components/about/abouthero";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Disclaimer from "@/components/about/aboutdisclaimer";
import AboutDescription from "@/components/about/aboutdescription";
import AboutGoals from "@/components/about/aboutgoals";
import AboutKabinet from "@/components/about/aboutkabinet"

export async function getServerSideProps() {
  const response = await fetch(process.env.KABINET_API);
  const dataKabinet = await response.json();

  return {
    props: {
      dataKabinet
    }
  }
}

interface Iprops {
  dataKabinet: Ikabinet[]
}

interface Ikabinet {
  nama: string,
  ketua: string,
  tahun: string,
  slug: string,
  cover: string,
  struktur: string,
  konten: string,
}

function About(props: Readonly<Iprops>) {
  const { dataKabinet } = props;
  return (
    <>
      <Head>
        <title>About HMTI</title>
        <meta name="description" content="Pelajari sejarah Himpunan Mahasiswa Teknik Industri (HMTI) UNSOED serta perkembangannya dari waktu ke waktu. Temukan bagaimana HMTI telah berkembang dan berkontribusi dalam dunia teknik industri. Mewujudkan Mahasiswa Teknik Industri UNSOED yang unggul dalam pengembangan ipteks yang berorientasi pada Sumber Daya Perdesaan serta kearifan lokal guna berperan aktif dalam pembangunan bangsa dengan berintegritas tinggi yang memiliki karakter, bertanggung jawab, kritis, berwawasan luas, memiliki kreativitas tinggi dan bertaqwa kepada Tuhan Yang Maha Esa." />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className="sticky top-0 w-full z-[100]">
          <Navbar />
        </section>
        <section className="sm:m-4 m-2">
          <HeroAbout />
        </section>
        <section className="py-5">
          <AboutDescription />
        </section>
        <section className="py-5">
          <AboutGoals />
        </section>
        <section className="py-5">
          <AboutKabinet dataKabinet={dataKabinet}/>
        </section>
        <section className="py-5">
          <Disclaimer />
        </section>
        <section className="">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default About;