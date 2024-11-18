import React from "react";
import Header from './Header';
import SearchBar from "./SearchBar";
import Slider from "./Slider";
import Card from './Cards';
import cardData from "./CardData";

const ShopPage = () => {
  





  return (
    <>
      <div className="bg-[#141616] h-[100vh]">
        <Header name="EverGreen Estates" title="Shop" className="bg-[#202324] pb-[1rem] pt-[1rem]" />

        <div className="flex justify-center h-[90%] w-[100%] items-start m-auto"> {/* Use 'items-start' to align items to the top */}
          <div className="bg-[#202324] h-[90%] w-[10%] m-[2rem] ml-[.5rem] rounded-lg relative p-3">
            tags
          </div>
          
          <div className="bg-[#202324] h-[90%] w-[83%] m-[2rem] ml-[.5rem] rounded-lg p-3 flex flex-col relative"> {/* Use flex-col to make elements stack vertically */}
           

            {/* Pass JSX content to Slider, ensuring it stays on a new line */}
            <Slider 




              content={( 
              <>


              <div className="w-[90%] pt-[1rem] pb-[1rem] pl-0 pr-0 flex m-auto justify-center">
                <SearchBar className="" buttonText="Search" text="Search for Homes . . ." />
              </div>




                
                <div className="grid-cols-4 h-auto w-[78vw] grid m-auto mt-[1rem] gap-[1vw] ">
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





              </>
  
              )}


              
              



              
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
