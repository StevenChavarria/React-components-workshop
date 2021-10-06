import React from 'react';
import Box from './Box'

interface AnimalClassprops {
	scientific_name: string;
	name: string;
	breed: string;
	zone: string;
	img: string;
}


export class Animalclass extends React.Component<AnimalClassprops> {
	render() {
		const { scientific_name, name, breed, zone, img } = this.props;
		return <div>
			<Box scientific_name={scientific_name} name={name} breed={breed} zone={zone} img={img} />
		</div>
	}
}