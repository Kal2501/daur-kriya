function CatalogCard({ item }) {
  return (
    <div className="group rounded-3xl bg-white/30 dark:bg-zinc-900/70 backdrop-blur-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden">

      <div className="grid lg:grid-cols-[350px_1fr]">

        <div className="overflow-hidden">

          <img
            src={item.gambar}
            alt={item.nama}
            className="lg:w-full lg:h-full w-full h-60 object-cover group-hover:scale-105 transition duration-500"
          />

        </div>

        <div className="p-8">

          <span className="inline-block bg-lime-300 text-lime-900 px-4 py-2 rounded-lg">

            {item.jenis}

          </span>

          <h2 className="text-4xl font-bold mt-5">

            {item.judul}

          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-8">

            <div>

              <h3 className="font-bold text-2xl mb-4">

                Alat & Bahan

              </h3>

              <ul className="space-y-2">

                {item.alat_bahan.map((alat, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-lime-500" />

                    {alat}
                  </li>
                ))}

              </ul>

            </div>

            <div>

              <h3 className="font-bold text-2xl mb-4">

                Langkah

              </h3>

              <ol className="space-y-3">

                {item.langkah.map((langkah, index) => (
                  <li
                    key={index}
                    className="flex gap-3"
                  >
                    <span className="font-bold text-lime-600">

                      {index + 1}.

                    </span>

                    <span>{langkah}</span>

                  </li>
                ))}

              </ol>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CatalogCard;
