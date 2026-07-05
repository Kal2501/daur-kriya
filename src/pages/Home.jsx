import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import About from "../components/About";
import catalogImage from "../images/catalog.jpg";
import calculatorImage from "../images/calculator.jpg";

function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="text-center mb-16">

          <span className="bg-lime-300 px-4 py-2 rounded-lg text-lime-900">
            Fitur
          </span>

          <h2 className="text-4xl lg:text-6xl font-bold mt-6 tracking-tighter">
            Kamu bisa apa aja sih
            <br />
            di DaurKriya
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <FeatureCard
            title="Cari Cara Daur Ulang Sampah"
            description="Cari berbagai ide kreatif mengolah sampah organik maupun anorganik."
            button="Buka Katalog"
            to="/katalog"
            image={catalogImage}
          />

          <FeatureCard
            title="Hitung Nilai Jual Sampah"
            description="Hitung potensi penghasilan dari sampah yang ingin kamu jual."
            button="Hitung Cuan"
            to="/kalkulator"
            image={calculatorImage}
          />

        </div>

      </section>

      <About />
    </>
  );
}

export default Home;
