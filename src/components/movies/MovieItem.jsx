import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ title, poster_path, original_language, id }) => {
  const navigate = useNavigate();
  return (
    <div className="w-56 rounded-lg shadow-md overflow-hidden opacity-100 transition-transform hover:scale-105">
      <img
        onClick={() => navigate(`/product/${id}`)}
        src={`${import.meta.env.VITE_IMAGE_URL}${
          poster_path || "default_image.jpg"
        }`}
        alt={title || "Название недоступно"}
        className="w-full h-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">
          {title || "Название недоступно"}
        </h3>
        <p className="text-sm text-white mt-1">
          Язык:{" "}
          {original_language ? original_language.toUpperCase() : "Неизвестно"}
        </p>
      </div>
    </div>
  );
};

export default memo(MovieItem);
