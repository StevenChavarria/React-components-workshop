import React from 'react';
import { Animalclass } from './Animalclass';
import { Animalfunctional } from './Animalfunctional';
import './App.css';


const App: React.FC = () => {
  const animals = [{ scientific_name: 'Felis catus', name: 'Cat', breed: 'Bengal', zone: 'United States', img: 'https://bit.ly/3Fe0MSO' }, { scientific_name: 'Canis lupus familiaris', name: 'Dog', breed: 'Siberian Husky', zone: 'Siberia', img: 'https://bit.ly/3oBYs24' }];
  const animals2 = [{ scientific_name: 'Strigiformes', name: 'Owl', breed: 'Great horned owl', zone: 'United States', img: 'https://bit.ly/3adfJWW' }, { scientific_name: 'Procyon lotor', name: 'Raccoon', breed: 'American raccoon', zone: 'United States', img: 'https://bit.ly/3a882Bq' }];
  return <div>
    <h2>Animals Class Component</h2>
    {animals.map((animal) => <Animalclass key={animal.name} scientific_name={animal.scientific_name} name={animal.name} breed={animal.breed} zone={animal.zone} img={animal.img} />)}
    
    <h2>Animals Functional Component</h2>
    {animals2.map((animal) => <Animalfunctional key={animal.name} scientific_name={animal.scientific_name} name={animal.name} breed={animal.breed} zone={animal.zone} img={animal.img} />)}
  </div>
}

export default App;