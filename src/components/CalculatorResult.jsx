import { HandCoins } from "lucide-react";

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
    <div className="mt-10 rounded-3xl bg-white/30 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xl p-10">
      <div className="flex justify-center mb-6">
        <HandCoins
          size={60}
          className="text-lime-700"
        />
      </div>

      <h2 className="text-center text-2xl lg:text-4xl font-bold mb-8">
        Segini nih kira-kira cuan yang kamu dapet...
      </h2>

      <div className="space-y-6">
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

      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        *Peringatan: Kami tidak menyediakan bank sampah. Harga jual sampah dihitung berdasarkan rata-rata harga bank sampah di seluruh Indonesia.
      </p>
    </div>
  );
}

export default CalculatorResult;
