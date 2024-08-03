import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, url, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, [url]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  const handleMouseDown = (e) => {
    const slider = document.getElementById("slider" + rowID);
    setIsDragging(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const slider = document.getElementById("slider" + rowID);
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="absolute bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className={`relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-pointer"
          }`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
