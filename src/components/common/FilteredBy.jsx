import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0 3em;
    width: 100%;
    box-sizing: border-box;
`;

const Filtered = styled.span`
    width: 100%;
    color: #0f95c1;
    font-weight: 600;
    margin-left: 1em;
    box-sizing: border-box;
    cursor: pointer;
`;

const FilteredBy = ({ cleanFilter, breed, subBreedValue }) => {



    return (
        <Container>
            <h5>Filtrado por:</h5>
            <Filtered onClick={cleanFilter} id='breed-value'>{breed} x </Filtered>
            {subBreedValue ?
                <Filtered onClick={cleanFilter} id='sub-breed-value'>{subBreedValue} x </Filtered> :
                null
            }
            <div className='section-title'>
                <h2>{breed.charAt(0).toUpperCase() + breed.slice(1)} {subBreedValue} dogs</h2>
            </div>
        </Container>
    )
}

export default FilteredBy;
