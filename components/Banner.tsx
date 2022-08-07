import { InformationCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";
interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);
  return (
    <div className="flex h-[65vh] lg:h-[75vh] items-end justify-start px-5 lg:px-8 ">
      <div>
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
            alt=""
          />
        </div>

        <h1 className="text-4xl font-bold md:text-4xl lg:text-7xl max-w-3xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-xs text-md text-shadow-lg md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl my-4">
          {movie?.overview.slice(0, 200) + "...."}
        </p>

        <div className="flex space-x-3 pt-3">
          <button className="bannerButton bg-white text-black">
            <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
            Play
          </button>

          <button className="bannerButton bg-[gray]/70">
            <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More
            Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
