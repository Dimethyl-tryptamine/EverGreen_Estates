import React from 'react';
import StarRating from '/src/components/Star-rating'

function Card({ name, location, cost, image, rating, description }) {
  return (
    <div className="bg-[#141616] p-4 rounded-lg shadow-lg m-6 drop-shadow-2xl">



      <img src={image} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-white text-xl font-semibold ">{name}</h3>
      <p className="text-gray-600 font font-Maitree">{location}</p>
      <p className="text-white font font-lato">{description}</p>
      <p className="text-green-500 font-bold relative bottom-0 left-0">{cost}</p>
      <StarRating rating={rating} className="flex scale-x-[-1]"/>
    </div>
  );
}

export default Card;