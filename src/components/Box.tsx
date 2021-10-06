import React from "react";
import './Box.css';

interface Boxprops {
	scientific_name: string;
	name: string;
	breed: string;
	zone: string;
	img: string;
}

export const Box: React.FC<Boxprops> = ({ scientific_name, name, breed, zone, img }) => {

	return <div className="container">
		<div className="card">
			<div className="card-header">
				<img src={img} alt="animal" />
			</div>
			<div className="card-body">
				<h4>{name}</h4>
				<span><strong>Scientific name: </strong>{scientific_name}</span>
				<span><strong>Breed: </strong>{breed}</span>
				<span><strong>Geographic Zone: </strong>{zone}</span>
			</div>
		</div>
	</div>
}
export default Box;