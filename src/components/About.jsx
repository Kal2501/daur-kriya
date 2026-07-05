import sayaImage from "../images/saya.jpg";

function About() {
    
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="rounded-3xl bg-white/30 dark:bg-zinc-900/30 backdrop-blur-xl shadow-2xl overflow-hidden ">

        <div className="flex gap-6 lg:gap-8 flex-col lg:flex-row items-center p-8">

            <img
              src={sayaImage}
              alt=""
              className="rounded-2xl lg:w-md"
              loading="lazy"
              decoding="async"
            />


          <div className="gap-4 flex flex-col">

            <span className="bg-lime-300 text-lime-900 px-4 py-2 rounded-lg w-fit">

              Tentang Saya

            </span>

            <h2 className="text-4xl lg:text-5xl font-bold  leading-tight tracking-tighter">

              Nama saya
              Kalingga Dwindra Putraka

            </h2>

            <p className=" text-md leading-7 lg:text-lg text-gray-600 dark:text-gray-300">

              Saat ini sedang menempuh pendidikan di Universitas Mulawarman
              Program Studi Informatika. Website ini dibuat untuk membantu
              masyarakat memperoleh referensi pengolahan limbah domestik
              sehingga memiliki nilai ekonomi dan bermanfaat bagi lingkungan.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
