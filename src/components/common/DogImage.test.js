import React from "react";
import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import DogImage from "./DogImage";

test('renders content', () => {
    const breedData = [
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg"
    ]

    const component = render(<DogImage breedData={breedData} />)

    expect(component.container.querySelector('img'))
})