import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';  // Solid star





const StarRating = ({ rating, className}) => {

    const stars = [];

    for (let i = 0; i < 5 ; i++){
        stars.push(
            <span key={i}>
                {i < rating ? (
                <StarIcon className="w-5 h-5 text-yellow-500" />) 
                : 
                (<StarIcon className="w-5 h-5 text-black" />)}
            </span>
        );
            
        
    }

 
    return(<div className= {className}>{stars}</div>)
}

export default StarRating








    
