import { Link } from "react-router-dom";
import heroImage from "../images/hero.jpg";
function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-46">

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <span className="inline-block bg-lime-300 text-lime-900 rounded-lg px-4 py-2 ">

            DaurKriya

          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">

            Daripada terhambur atau dibakar

            mending di-

            <span className="text-lime-600">
              Daur Ulang
            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 max-w-xl">

            Website ini membantu kamu menemukan cara kreatif
            mengolah limbah rumah tangga sekaligus menghitung
            peluang cuan dari sampah.

          </p>

          <Link
            to="/katalog"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl bg-lime-700 text-white hover:bg-lime-800 transition"
          >
            Buka Katalog
          </Link>

        </div>

        <div className="flex justify-center">

          <img
            src={heroImage}
            alt=""
            className="rounded-3xl shadow-2xl w-full max-w-md hidden lg:block"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
