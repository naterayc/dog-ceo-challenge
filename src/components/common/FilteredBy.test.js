import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import FilteredBy from './FilteredBy';

const breed = 'bulldog'
const subBreed = 'french'

test('renders filter breed value', () => {
    const component = render(<FilteredBy breed={breed} />)
    expect(component.getByText('Bulldog dogs'))
})

test('renders filter breed and subBreed values', () => {
    const component = render(<FilteredBy breed={breed} subBreedValue={subBreed} />)
    expect(component.getAllByText('Bulldog french dogs'))
})