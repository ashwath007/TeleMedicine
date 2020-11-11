import React from 'react';
import img from '../assets/background.png';
function BottomFront() {
	return (
		<div className='ml-3 mt-4'>
			<h1 style={{ marginLeft: '600px', marginTop: '50px' }}>
				Features
			</h1>
			<img
				src={img}
				alt='Image'
				width='1300px'
				height='600px'
				style={{ marginTop: '100px' }}
			/>
		</div>
	);
}

export default BottomFront;
