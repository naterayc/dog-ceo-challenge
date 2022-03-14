import React, { useContext } from "react";
import { SubBreedContext } from "../../contexts/SubBreedContext";
import DogImage from "../common/DogImage";
import Loader from "../common/Loader";
import NotFound from "../common/NotFound";

const SubBreed = () => {
    const { subBreedData, doneFetch } = useContext(SubBreedContext);

    return (
        <>
        
            {
                doneFetch ? (
                    subBreedData.length ?
                        <DogImage breedData={subBreedData} /> :
                        <NotFound />) :
                <Loader /> 
            }
        </>
    )
}

export default SubBreed;
