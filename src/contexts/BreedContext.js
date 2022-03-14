import React, { createContext, useEffect, useState } from "react";
import { breedGet } from "../constants";

export const BreedContext = createContext();

const BreedContextProvider = ({ children }) => {
    const breed = document.querySelector('#breed-select').value;
    const [doneFetch, setDoneFetch] = useState();
    const [breedData, setBreed] = useState([]);

    useEffect(() => {

        const getBreed = () => {
            fetch(breedGet(breed))
                .then((res) => res.json())
                .then((data) => {
                    setBreed(data.message.slice(0,21));
                    setDoneFetch(true);
                })
                .catch((err) => console.log(err));
        }

        getBreed();
    }, [breed]);

    return(
        <BreedContext.Provider value={{ breedData, doneFetch }}>
            {children}
        </BreedContext.Provider>
    )
}

export default BreedContextProvider;
