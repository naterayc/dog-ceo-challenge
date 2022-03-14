import React, { createContext, useEffect, useState } from "react";
import { subBreedGet } from "../constants";

export const SubBreedContext = createContext();

const SubBreedContextProvider =  ({ children }) => {
    const breed = document.querySelector('#breed-select').value;
    const subBreed = document.querySelector('#sub-breed-select').value;
    const [doneFetch, setDoneFetch] = useState();
    const [subBreedData, setSubBreedData] = useState([]);
    useEffect(() => {
        const getSubBreed = () => {
            fetch(subBreedGet(breed, subBreed))
                .then((res) => res.json())
                .then((data) => {
                    setSubBreedData(data.message);
                    setDoneFetch(true);
                })
                .catch((err) => console.log(err));
        }

        getSubBreed();
    }, [subBreed]);

return(
    <SubBreedContext.Provider value={{ subBreedData, doneFetch }}>
        { children }
    </SubBreedContext.Provider>
)
}

export default SubBreedContextProvider