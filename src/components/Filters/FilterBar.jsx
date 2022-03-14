import React, { useState, useRef } from "react";
import useGetSubBreeds from "../../custom-hooks/useGetSubBreeds";
import RandomBreedsContextProvider from "../../contexts/RandomBreedContext";
import Random from "../RandomBreeds";
import BreedContextProvider from "../../contexts/BreedContext";
import Breed from "../Breed";
import SubBreedContextProvider from "../../contexts/SubBreedContext";
import SubBreed from "../SubBreed";
import FilteredBy from "../common/FilteredBy";

const FilterBar = ({ filterData }) => {
    const breedsList = Object.keys(filterData);
    const { getSubBreeds, subBreeds } = useGetSubBreeds();
    const [breed, setBreed] = useState('');
    const [subBreedValue, setSubBreedValue] = useState('');
    const selectBreed = useRef(null);
    const selectSubBreed = useRef(null);


    const handleChange = (e) => {
        let value = e.target.value;
        getSubBreeds(value);
        setBreed(selectBreed.current.value);
        setSubBreedValue('')
    }

    const handleChangeSub = (e) => {
        setSubBreedValue(e.target.value);
    }

    const cleanFilter = (e) => {
        if(e.target.id === "breed-value"){
            selectBreed.current.options[0].selected = true;
            setBreed(selectBreed.current.value)
        } else {
            selectSubBreed.current.options[0].selected = true;
            setSubBreedValue(selectSubBreed.current.value);
        }   
    }

    return (
        <>
            <div className="filter-bar">
                <h4>Busca:</h4>
                <select onChange={handleChange} id='breed-select' ref={selectBreed}>
                    <option selectedvalue='true' hidden value=''>Raza</option>
                    {breedsList.map((breed, index) => {
                        return (
                            <option key={index} id={index} value={breed}>{breed}</option>
                        )
                    })}
                </select>
                {subBreeds.length >= 1 ? (
                    <select onChange={handleChangeSub} id='sub-breed-select' ref={selectSubBreed}>
                        <option selectedvalue='true' hidden value=''>SubRaza</option>
                        {
                            subBreeds.map(subBreed => {
                                return (
                                    <option key={subBreed} value={subBreed}>{subBreed}</option>
                                )
                            })
                        }
                    </select>) :
                    null}
            </div>
            {breed === '' ?
                <RandomBreedsContextProvider>
                    <Random />
                </RandomBreedsContextProvider> :

                (subBreedValue === '' ?
                    <>
                        <FilteredBy cleanFilter={cleanFilter} breed={breed}/>
                        <BreedContextProvider>
                            <Breed />
                        </BreedContextProvider>
                    </> :
                    <>
                        <FilteredBy cleanFilter={cleanFilter} breed={breed} subBreedValue={subBreedValue}/>
                        <SubBreedContextProvider>
                            <SubBreed />
                        </SubBreedContextProvider>
                    </>

                )
            }
        </>
    )
}

export default FilterBar