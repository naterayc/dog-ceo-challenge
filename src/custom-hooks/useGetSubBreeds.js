import { useState } from 'react';
import { subBreedListGet } from '../constants';

const useGetSubBreeds = () => {
    const [subBreeds, setSubBreeds] = useState([]);

    const getSubBreeds = (breed) => {
        fetch(subBreedListGet(breed))
            .then((res) => res.json())
            .then((data) => {
                setSubBreeds(data.message);
            })
            .catch((err) => console.log(err));
    }

    return { subBreeds, getSubBreeds };
};

export default useGetSubBreeds;
