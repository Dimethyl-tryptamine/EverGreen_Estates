import React from "react";
import Header from './Header';
import Hero from './Hero';
import Card from './Cards';
import cardData from "./CardData";

const HomePage = () => {
  const cardData = [
    {
      image: 'src/assets/home1.jpg',
      name: 'Beach House',
      cost: '$300,000',
      location: 'Miami Beach, FL',
      description: 'Detached and duet-style rental homes just outside of Sacramento featuring community amenities',
      rating: 5,
    },
    {
      image: 'src/assets/home2.jpg',
      name: 'Apartment',
      cost: '$100,000',
      location: 'Manhattan, NY',
      description: 'Detached and duet-style rental homes just outside of Sacramento featuring community amenities',
      rating: 5,
    },
    {
      image: 'src/assets/home3.jpg',
      name: 'Apartment',
      cost: '$100,000',
      location: 'Manhattan, NY',
      description: 'Detached and duet-style rental homes just outside of Sacramento featuring community amenities',
      rating: 4,
    },
    {
      image: 'src/assets/home4.jpg',
      name: 'Apartment',
      cost: '$100,000',
      location: 'Manhattan, NY',
      description: 'Detached and duet-style rental homes just outside of Sacramento featuring community amenities',
      rating: 4,
    },
    {
      image: 'src/assets/home5.jpg',
      name: 'Apartment',
      cost: '$100,000',
      location: 'Manhattan, NY',
      description: 'Detached and duet-style rental homes just outside of Sacramento featuring community amenities',
      rating: 5,
    },
    {
      image: 'src/assets/home6.jpg',
      name: 'Apartment',
      cost: '$100,000',
      location: 'Manhattan, NY',
      description: 'Detached and duet-style rental homes just outside of Sacramento featuring community amenities',
      rating: 4,
    },
    {
      image: 'src/assets/home7.jpg',
      name: 'Apartment',
      cost: '$100,000',
      location: 'Manhattan, NY',
      description: 'Detached and duet-style rental homes just outside of Sacramento featuring community amenities',
      rating: 5,
    },
    {
      image: 'src/assets/home8.jpg',
      name: 'Apartment',
      cost: '$100,000',
      location: 'Manhattan, NY',
      description: 'Detached and duet-style rental homes just outside of Sacramento featuring community amenities',
      rating: 4,
    },
    ];

  return (
    <>
      <Hero />

      <div className="bg-[#202324]">
        <Header />
        <div className="mx-[5rem] h-auto w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              name={card.name}
              cost={card.cost}
              location={card.location}
              description={card.description}
              rating={card.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
