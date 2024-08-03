import React from "react";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
const SaveShows = () => {
  const [movies, setMovies] = useState([]);

  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteShow = async (passedId) => {
    try {
      const result = movies.filter((item) => item.id !== passedId);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">My List</h2>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="relative w-full h-full grid grid-cols-3 justify-center gap-4"
        >
          {movies.map((item, id) => (
            <div key={id} className="inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-auto block 2xl:m-4 m-r"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-sx md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item.title}
                </p>
                <p
                  className="absolute right-3 top-3"
                  onClick={() => deleteShow(item.id)}
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaveShows;
