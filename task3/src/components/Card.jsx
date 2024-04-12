import React from 'react';


export function Card({props}) {
	return (
		<div className='card'>
			<h1>{props.skillName}</h1>
			<h2>{props.description}</h2>
			<h3>{props.progress}</h3>
		</div>
	);
}

