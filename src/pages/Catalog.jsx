import { useState } from "react";
import catalogData from "../data/catalog.json";
import CatalogCard from "../components/CatalogCard";

function Catalog() {
  const [jenis, setJenis] = useState("");
  const [nama, setNama] = useState("");
  const [hasil, setHasil] = useState([]);
  const isFormComplete = jenis !== "" && nama !== "";

  let daftar = [];

  if (jenis === "Organik") {
    daftar = [
      "Minyak Jelantah",
      "Sampah Makanan",
      "Daun Kering",
      "Ampas Kopi",
      "Baglog Bekas Jamur",
    ];
  } else if (jenis === "Anorganik") {
    daftar = [
      "Kardus",
      "Botol Plastik",
      "Kaleng",
      "Kertas",
      "Kaca",
    ];
  }

  function cariData() {
    const data = catalogData.filter(
      (item) => item.jenis === jenis && item.nama === nama
    );

    setHasil(data);
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 lg:py-36">

      <div className="text-center mb-8">

        <span className="bg-lime-300 text-lime-900 px-4 py-2 rounded-lg">
          Katalog
        </span>

        <h1 className="text-4xl lg:text-6xl font-bold mt-6 tracking-tighter">
          Cari cara daur ulang sampahmu!
        </h1>

      </div>

      <div className="space-y-6">

        <select
          className="w-full rounded-2xl border border-lime-300 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl p-5 text-lg shadow-lg"
          value={jenis}
          onChange={(e) => {
            setJenis(e.target.value);
            setNama("");
          }}
        >
          <option value="">Pilih Jenis Sampah</option>
          <option>Organik</option>
          <option>Anorganik</option>
        </select>

        <select
          className="w-full rounded-2xl border border-lime-300 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl p-5 text-lg shadow-lg"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        >
          <option value="">Pilih Sampah</option>

          {daftar.map((item) => (
            <option key={item}>
              {item}
            </option>
          ))}

        </select>

        <button
            onClick={cariData}
          disabled={!isFormComplete}
          className="w-full rounded-2xl bg-lime-600 hover:bg-lime-700 disabled:bg-lime-700/50  disabled:cursor-not-allowed text-white font-semibold py-5 text-lg transition"
            >

            Cari

        </button>

      </div>

      {hasil.length > 0 && (
        <div className="space-y-10 mt-14">

          {hasil.map((item, index) => (
            <CatalogCard
              key={index}
              item={item}
            />
          ))}

        </div>
      )}

    </section>
  );
}

export default Catalog;
