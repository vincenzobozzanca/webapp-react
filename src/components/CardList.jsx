import { Card } from "./Card";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchMovies } from "../services/api";
import { useState } from "react";

export function CardList() {
  const [movies, setMovies] = useState([]);
  const { data, isSuccess } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies, 
  });
  useEffect(() => {
    if (data && isSuccess) {
      setMovies(data);
    }
  }, [data, isSuccess]);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Movie Collection
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        {/* Mappatura delle card */}
        {movies.map((movie) => (
          <Card
            director={movie.director}
            genre={movie.genre}
            id={movie.id}
            release_year={movie.release_year}
            title={movie.title}
            key={movie.id}
            image={movie.image}
			slug={movie.slug}
          />
        ))}
      </div>
    </div>
  );
}
