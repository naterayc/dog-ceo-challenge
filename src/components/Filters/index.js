import React, {useContext} from 'react';
import { AllBreedsContext } from '../../contexts/AllBreedsContext';
import FilterBar from './FilterBar';

const Filters = () => {
    const { allBreeds } = useContext(AllBreedsContext);

    return (
        <>
            {
                allBreeds ?
                    <FilterBar filterData={allBreeds} /> :
                null
            }
        </>
    )

}

export default Filters;
