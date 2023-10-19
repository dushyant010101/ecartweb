import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import Offers from "../Offers/Offers";
import NewCollection from "../New Collection/NewCollection";
import NewsLatter from "../NewsLatter/NewsLatter";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Popular category="popular" />
        <Offers/>
        <NewCollection/>
        <NewsLatter/>
      </div>
    </>
  );
};

export default Home;
