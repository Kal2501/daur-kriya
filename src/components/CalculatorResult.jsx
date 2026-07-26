import { HandCoins, MapPin } from "lucide-react";

const banks = [
  {
    id: 1,
    nama: "Bank Sampah Induk Joyo Sakti",
    alamat:
      "Jl. Pinang Dalam No. 47, Sangatta Utara, Kec. Sangatta Utara, Kabupaten Kutai Timur, Kalimantan Timur 75683",
    maps:
      "https://www.google.com/maps/search/?api=1&query=Bank%20Sampah%20Induk%20Joyo%20Sakti%20Sangatta%20Utara",
    query: "Bank Sampah Induk Joyo Sakti, Sangatta Utara, Kabupaten Kutai Timur, Kalimantan Timur 75683",
  },
  {
    id: 2,
    nama: "Bank Sampah Mandiri Jaya",
    alamat:
      "Jl. Hidayatullah Jl. Hidayatullah Gg. Al-Khoir, Sangatta Utara, Kec. Sangatta Utara, Kabupaten Kutai Timur, Kalimantan Timur 75683",
    maps:
      "https://www.google.com/maps/search/?api=1&query=Bank%20Sampah%20Mandiri%20Jaya%20Sangatta",
    query: "Bank Sampah Mandiri Jaya, Sangatta Utara, Kabupaten Kutai Timur, Kalimantan Timur",
  },
];

function getRekomendasi(total) {
  if (total < 50000) {
    return "Nilai jual sampah masih relatif rendah. Sebaiknya kumpulkan lebih banyak sampah atau kombinasikan dengan jenis sampah lain agar hasil penjualan lebih menguntungkan.";
  }

  if (total < 100000) {
    return "Nilai jual sudah cukup baik. Agar memperoleh keuntungan yang lebih maksimal, sebaiknya sampah diolah atau dipilah dengan lebih baik sebelum dijual.";
  }

  return "Sampah yang kamu miliki memiliki potensi nilai jual yang tinggi. Terus lakukan pemilahan dan pengolahan dengan baik agar keuntungan yang diperoleh semakin maksimal.";
}

function CalculatorResult({ total }) {
  const rekomendasi = getRekomendasi(total);

  return (
    <div className="mt-10 rounded-3xl bg-white/30 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xl p-5 lg:p-10">
      <div className="flex justify-center mb-4 lg:mb-6">
        <HandCoins
          size={48}
          className="lg:size-15 text-lime-700"
        />
      </div>

      <h2 className="text-center text-2xl lg:text-4xl font-bold mb-6 lg:mb-8">
        Segini nih kira-kira cuan yang kamu dapet...
      </h2>

      <div className="space-y-5 lg:space-y-6">
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold">
            Perkiraan Harga Jual
          </h3>

          <p className="mt-2 text-2xl font-bold text-lime-600">
            Rp {total.toLocaleString("id-ID")}
          </p>
        </div>

        <div>
          <h3 className="text-xl lg:text-2xl font-semibold">
            Rekomendasi
          </h3>

          <p className="mt-2 leading-7">
            {rekomendasi}
          </p>
        </div>
      </div>

      <p className="mt-6 lg:mt-8 text-sm text-gray-500 dark:text-gray-400">
        *Peringatan: Kami tidak menyediakan bank sampah. Harga jual sampah dihitung berdasarkan rata-rata harga bank sampah di seluruh Indonesia.
      </p>

      <section className="mt-8 lg:mt-10 rounded-3xl bg-white/30 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xl p-4 lg:p-8">
        <div className="flex items-center gap-3 mb-4 lg:mb-6">
          <MapPin className="text-lime-700" size={24} />
          <h3 className="text-xl lg:text-3xl font-bold text-lime-900 dark:text-lime-200">
            Bank Sampah di Sekitar Sangatta
          </h3>
        </div>

        <div className="space-y-4 lg:space-y-5">
          {banks.map((bank) => (
            <article
              key={bank.id}
              className="rounded-2xl bg-white/40 dark:bg-zinc-950/40 backdrop-blur-xl p-3 lg:p-5 shadow-lg"
            >
              <div className="grid gap-3 lg:grid-cols-[320px_1fr] lg:items-center">
                <div className="overflow-hidden rounded-2xl bg-lime-50 dark:bg-zinc-950">
                  <iframe
                    title={`Peta ${bank.nama}`}
                    className="h-55 w-full lg:w-80"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(bank.query)}&output=embed`}
                    allowFullScreen
                  />
                </div>

                <div className="flex h-full flex-col justify-center text-left">
                  <div>
                    <h4 className="text-lg lg:text-2xl font-bold text-lime-900 dark:text-lime-100">
                      {bank.nama}
                    </h4>

                    <p className="mt-2 text-sm lg:text-base leading-6 lg:leading-7 text-zinc-700 dark:text-zinc-300">
                      {bank.alamat}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-4 lg:mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
          Disarankan menghubungi bank sampah terlebih dahulu untuk memastikan jenis sampah yang diterima dan harga jual terbaru.
        </p>
      </section>
    </div>
  );
}

export default CalculatorResult;
