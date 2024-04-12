import React, { useState } from 'react';


export function MyButton(props) {
	
	return (
		<div>
			<button>{props.children}</button>
		</div>
	);
}

