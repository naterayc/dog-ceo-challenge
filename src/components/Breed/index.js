import React, { useContext } from "react";
import { BreedContext } from "../../contexts/BreedContext";
import DogImage from "../common/DogImage";
import Loader from "../common/Loader";
import NotFound from "../common/NotFound";

const Breed = () => {
    const { breedData, doneFetch } = useContext(BreedContext);

    return (
        <>
        
            {
                doneFetch ? (
                    breedData.length ?
                        <DogImage breedData={breedData} /> :
                        <NotFound />) :
                <Loader /> 
            }
        </>
    )
}

export default Breed;
