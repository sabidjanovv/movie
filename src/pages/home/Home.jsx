import React, { memo, useEffect, useState } from "react";
import Movies from "../../components/movies/Movies";
import { request } from "../../api";
import { Carousel } from "../../components/carousel/Carousel";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Genre from "../../components/genre/Genre";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState([]); 

  const handleChange = (event, value) => {
    setPage(value);
  };

  // useEffect(()=>{
  //   setPage(1)
  // }, [selectedGenres])

  useEffect(() => {
    request.get("/genre/movie/list").then((res) => setGenres(res.data.genres));
  }, []);

  useEffect(() => {
    request("/discover/movie", {
      params: {
        page: page,
        without_genres: "18,10749",
        with_genres: selectedGenres.join(","),
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  }, [page, selectedGenres]);

  // useEffect(() => {
  //   request("/discover/movie").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);
  return (
    <div className="bg-black">
      <Genre
        setPage={setPage}
        data={genres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />
      <Carousel data={data} />
      <Movies data={data} />
      <Footer />
    </div>
  );
};

export default memo(Home);
