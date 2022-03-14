import React, { useContext } from "react";
import { RandomBreedsContext } from "../../contexts/RandomBreedContext";
import DogImage from "../common/DogImage";
import Loader from "../common/Loader";
import NotFound from "../common/NotFound";

const Random = () => {
    const { randomBreeds, doneFetch, title } = useContext(RandomBreedsContext);

    return (
        <>
        <div className="section-title">
            <h2>Random Dogs</h2>
        </div>
            {
                doneFetch ? (
                    randomBreeds.length ?
                        <DogImage breedData={randomBreeds} /> :
                        <NotFound />) :
                <Loader /> 
            }
        </>
    )
}

export default Random;
