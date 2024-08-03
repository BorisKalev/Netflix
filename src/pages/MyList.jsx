import React from "react";
import SaveShows from "../components/SaveShows";
const MyList = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://t4.ftcdn.net/jpg/05/99/74/03/360_F_599740318_YpZIXZ4IqJ85Fz2mm1VpzgyXyMKUDEmv.jpg"
          alt="backgroud image"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>

        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My List</h1>
        </div>
      </div>
      <SaveShows />
    </>
  );
};

export default MyList;
