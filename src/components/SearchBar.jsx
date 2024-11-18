import React from "react";

const SearchBar = ({className, text, buttonText, classNameButton, classNameText}) => {





    return (

        <div className={`${className}   flex justify-center items-center w-[100%]`}>

            
                
            

            <input 
            type="search" 
            className= {`${classNameText} bg-[#141616] rounded-[13px] pl-[1rem] pr-[.5rem] mr-[1rem] placeholder:text-[#43494b] placeholder:opacity-50  text-[#43494b] font-lato font-semibold h-[2.5rem] w-[90%]  focus:border-none focus:outline-none  text-[1.3vw]`}
            placeholder={text || "Search..."}
            />



            <button className= {`${classNameButton}  bg-[#228000]  rounded-[13px]  font-lato font-semibold text-white h-[2.5rem] w-[10%] text-[1.5vw] items-center`} >
                {buttonText}
            </button>

            {/* need to add search by map option by clicking map icon  */}



        </div>

    )
}

export default SearchBar;