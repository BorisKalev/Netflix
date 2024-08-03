import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <div>
      <Hero />
      <Row rowID={1} title="Up Coming" url={requests.requestUpcoming} />
      <Row rowID={2} title="Trending" url={requests.requestTrending} />
      <Row rowID={3} title="Popular" url={requests.requestPopular} />
      <Row rowID={4} title="Top Rated" url={requests.requestTopRated} />
      <Row rowID={5} title="Horror" url={requests.requestHorror} />
    </div>
  );
};

export default Home;
