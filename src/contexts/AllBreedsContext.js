import React, { createContext, useEffect, useState } from "react";
import { allBreedsGet } from "../constants";

export const AllBreedsContext = createContext();

const AllBreedsContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState();
    const [allBreeds, setAllBreeds] = useState([]);

    useEffect(() => {
        getAllBreeds();
    }, []);

    const getAllBreeds = () => {
        fetch(allBreedsGet())
            .then((res) => res.json())
            .then((data) => {
                setAllBreeds(data.message);
                setDoneFetch(true);
            })
            .catch((err) => console.log(err));
    }

    return(
        <AllBreedsContext.Provider value={{ allBreeds, doneFetch }}>
            {children}
        </AllBreedsContext.Provider>
    )
}

export default AllBreedsContextProvider;
