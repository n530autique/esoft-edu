import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function UserList(props) {
	const [data, setData] = useState('')
	useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(' https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function (optional)
    };
  }, []);
	return (
		<div>
			<h6>{JSON.stringify(data)}</h6>
		</div>
	);
}

