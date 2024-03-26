import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import Fotter from "../components/Footer";
import { Gents, Ladies } from "../data";
import WomenCollections from "../components/WomenCollections";

const MainPage = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents);
  const [ladiesFashion, setladiesfashion] = useState(Ladies);

  console.log(Gents);
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion} />
      <WomenCollections ladiesFashion={ladiesFashion} />
      <Fotter />
    </div>
  );
};

export default MainPage;
