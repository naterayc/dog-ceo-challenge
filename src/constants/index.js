const base_url = 'https://dog.ceo/api/';

export const allBreedsGet = () => `${base_url}breeds/list/all`
export const randomBreedsGet = () => `${base_url}breeds/image/random/12`;
export const breedGet = (breed) => `${base_url}breed/${breed}/images`;
export const subBreedListGet = (breed) => `${base_url}breed/${breed}/list`;
export const subBreedGet = (breed, subBreed) => `${base_url}breed/${breed}/${subBreed}/images`
