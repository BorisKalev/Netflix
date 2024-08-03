import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { FaArrowLeft } from "react-icons/fa6";
const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [movieClicked, setMovieClicked] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);
  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  const onMovieClick = () => {
    setMovieClicked(!movieClicked);
    if (!movieClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
          onClick={onMovieClick}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p
            className="white-space-normal text-sx md:text-sm font-bold flex justify-center items-center h-full text-center"
            onClick={onMovieClick}
          >
            {item.title.length <= 15
              ? item.title
              : `${item.title.slice(0, 20)}...`}
          </p>
          <p onClick={saveShow}>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
      {/* {movieClicked && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="relative bg-black text-white w-[70%] h-[45%] p-8 flex flex-col items-center justify-center rounded-lg">
              <FaArrowLeft
                className="absolute top-4 left-4 cursor-pointer w-[30px] h-[30px]"
                onClick={onMovieClick}
              />
              <div className="flex justify-between items-center w-full h-full">
                <div className="flex flex-col mr-10 space-y-4 flex-grow">
                  <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                  <p className="text-lg mb-4 text-wrap">{item.overview}</p>
                  <div className="flex gap-5 pt-8">
                    <button className="font-bold w-[100px] h-[40px] text-black bg-white rounded-sm">
                      Play
                    </button>
                    <button className="font-bold bg-gray-500 rounded-sm w-[100px] h-[40px]">
                      More Info
                    </button>
                  </div>
                </div>
                <div className="xl:w-[500px] xl:h-[400px] flex-shrink-0 sm:w-[200px] ">
                  <img
                    className="w-full h-full object-contain rounded-md"
                    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                    alt={item?.title}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )} */}
    </>
  );
};

export default Movie;
