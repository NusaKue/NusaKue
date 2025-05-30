import { useState } from "react";
import SearchBar from "../../SearchBar";
import DropDown from "../../DropDown";
import UMKMCard from "../../UMKMCard";
import umkmList from "../../../models/umkmList";

const FindUMKM = () => {
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(query);
      setQuery("");
    }
  };

  const handleSelectRegion = (region) => {
    console.log(region);
    setSelectedRegion(region);
  };

  const regionOptions = [
    "Jawa Barat",
    "Jawa Tengah",
    "Jawa Timur",
    "Kalimantan Barat",
    "Bengkulu",
  ];

  return (
    <section className="find-umkm px-6 sm:px-8 md:px-12 lg:px-24 mt-3 md:mt-4 lg:mt-16 py-8 sm:py-10 md:py-14 lg:py-16">
      <div className="umkm-header text-primary-100 lg:mx-20">
        <h1 className="umkm-title font-baloo text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-1 text-center pb-5 sm:pb-6 md:pb-8 lg:pb-10">
          Jelajahi Kue Tradisional dari Beberapa Daerah Pilihan!
        </h1>
      </div>
      <SearchBar
        icon="/assets/icons/Search.svg"
        placeholder="Cari"
        value={query}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      ></SearchBar>
      <DropDown
        label="Filter Berdasarkan Lokasi"
        icon="/assets/icons/down.svg"
        options={regionOptions}
        selected={selectedRegion}
        onSelect={handleSelectRegion}
      ></DropDown>
      <div className="flex flex-wrap gap-6 justify-start lg:justify-center">
        {umkmList.map((umkm, index) => (
          <UMKMCard key={index} {...umkm} />
        ))}
      </div>
    </section>
  );
};

export default FindUMKM;
