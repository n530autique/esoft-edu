import React from 'react';

export function Card(props) {
	return (
		<div className='card'>
			<img src={props.image}></img>
			<span className='montserrat'>{props.children}</span>
		</div>
	);
}

