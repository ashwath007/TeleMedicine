import React, { useState } from 'react';
import '../cssComponent/details.css';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';
function Details() {
	const [name, setname] = useState('');
	const [phno, setphno] = useState('');
	const [district, setdistrict] = useState('');
	const [age, setage] = useState();
	const [Isentered, setIsentered] = useState(false);
	const submitClick = () => {
		if (name !== ' ' && phno !== ' ' && district !== ' ' && age !== 0) {
			setIsentered(true);
		}
	};
	return (
		<div className='details'>
			<h1 style={{ color: 'green' }}>MediJi</h1>
			<h3 className='mt-3'>****Fill Your Details****</h3>
			<TextField
				label='Name'
				variant='outlined'
				type='text'
				className='detail_btn mt-3'
				required='true'
				value={name}
				onChange={(e) => setname(e.target.value)}
			/>
			<TextField
				label='Ph-No'
				variant='outlined'
				type='text'
				className='detail_btn mt-3'
				required='true'
				value={phno}
				onChange={(e) => setphno(e.target.value)}
			/>
			<TextField
				label='district'
				variant='outlined'
				type='text'
				className='detail_btn mt-3'
				required='true'
				value={district}
				onChange={(e) => setdistrict(e.target.value)}
			/>
			<TextField
				label='Age'
				variant='outlined'
				type='number'
				className='detail_btn mt-3'
				required='true'
				value={age}
				onChange={(e) => setage(e.target.value)}
			/>
			<button
				type='button'
				className='btn btn-success mt-3 p-2 pl-5 pr-5'
				onClick={submitClick}
			>
				Submit
			</button>
			{Isentered && (
				<Redirect
					to={{
						pathname: '/dashboard',
						data: {
							name: name,
							district: district,
						},
					}}
				/>
			)}
		</div>
	);
}

export default Details;
