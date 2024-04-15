import React, { useEffect, useState } from 'react';

export function Window(props) {
	const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

	return (
		<div>
			<h1>{windowSize.height}x{windowSize.width}</h1>
		</div>
	);
}

