import React, { createContext, useEffect, useState } from "react";
import { randomBreedsGet } from "../constants";

export const RandomBreedsContext = createContext();

const RandomBreedsContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState();
    const [randomBreeds, setRandomBreeds] = useState([]);

    useEffect(() => {
        getRandomBreeds();
    }, []);


    const getRandomBreeds = () => {
        fetch(randomBreedsGet())
            .then((res) => res.json())
            .then((data) => {
                setRandomBreeds(data.message);
                setDoneFetch(true);
            })
            .catch((err) => console.log(err));
    }



    return (
        <RandomBreedsContext.Provider value={{ doneFetch, randomBreeds }}>
            {children}
        </RandomBreedsContext.Provider>
    );
}

export default RandomBreedsContextProvider;
