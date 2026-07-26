import { useState } from "react";
import prices from "../data/prices.json";
import CalculatorResult from "../components/CalculatorResult";

function Calculator() {

  const [nama, setNama] = useState("");
  const [berat, setBerat] = useState("");
  const [hasil, setHasil] = useState(null);
  const isFormComplete = nama !== "" && berat !== "";

  function handleBeratChange(e) {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setBerat(onlyDigits);
  }

  function hitungHarga() {

    let harga = 0;

    for (let item of prices) {
      if (item.nama === nama) {
        harga = item.harga;
      }
    }

    const total = Number(berat) * harga;

    setHasil(total);

  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 lg:py-36">

      <div className="text-center mb-8">

        <span className="bg-lime-300 text-lime-900 px-4 py-2 rounded-lg">
          Kalkulator Sampah
        </span>

        <h1 className="text-4xl lg:text-6xl font-bold mt-6 tracking-tighter">
          Hitung peluang cuan kamu dari sampah!
        </h1>

      </div>

      <div className="space-y-6">

        <select
          className="w-full rounded-2xl border border-lime-300 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl p-5 text-lg shadow-lg"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        >
          <option value="">
            Pilih Sampah
          </option>

          {prices.map((item) => (
            <option
              key={item.nama}
            >
              {item.nama}
            </option>
          ))}

        </select>

        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Masukkan berat (kg)"
          value={berat}
          onChange={handleBeratChange}
          className="w-full rounded-2xl border border-lime-300 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl p-5 text-lg shadow-lg"
        />

        <button
          onClick={hitungHarga}
          disabled={!isFormComplete}
          className="w-full rounded-2xl bg-lime-600 hover:bg-lime-700 disabled:bg-lime-700/50 disabled:cursor-not-allowed text-white font-semibold py-5 text-lg transition"
        >
          Hitung
        </button>

      </div>

      {hasil !== null && (
        <CalculatorResult total={hasil} />
      )}

    </section>
  );
}

export default Calculator;
