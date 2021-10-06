import React from 'react';
import Box from './Box'

interface Animalprops {
	scientific_name: string;
	name: string;
	breed: string;
	zone: string;
	img: string;
}


export const Animalfunctional:React.FC<Animalprops> = ({scientific_name, name, breed, zone, img}) => {
	return <div>
         <Box scientific_name={scientific_name} name={name} breed={breed} zone={zone} img={img} />
	</div>
}

