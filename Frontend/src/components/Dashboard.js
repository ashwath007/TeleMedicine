import React, { useState } from 'react';
import '../cssComponent/dashboard.css';
import Image_left from '../assets/Image_left.png';
import Bottom from '../assets/bottom.png';
import connect from '../assets/connect.jpg';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Dashboard(props) {
	const [diseases, setdiseases] = useState('');
	const [ddiseases, setddiseases] = useState('');
	return (
		<div>
			<div className='dashboard '>
				<div className='dashboard__name'>
					<h1>Meditalk</h1>
				</div>
				<div className='dashboard__name'>
					<h3>{props.location.data.name}</h3>
				</div>
			</div>
			<div className='dashboard__input'>
				<div className='dashboard__input__left'>
					<img
						src={Image_left}
						alt='consult'
						width='530px'
						height='200px'
					/>
					<TextField
						type='text'
						className='mt-5 dashboard__text'
						placeholder='Enter your Problem here'
						onChange={(e) => setdiseases(e.target.value)}
						value={diseases}
					/>
					<h4
						style={{
							marginLeft: '250px',
							marginTop: '30px',
							color: 'grey',
						}}
					>
						or
					</h4>
					<label for='exampleFormControlSelect1'>
						Select Speciality
					</label>
					<select
						class='form-control'
						id='exampleFormControlSelect1'
						onChange={(e) => setddiseases(e.target.value)}
						value={ddiseases}
					>
						<option>Pediatrician</option>
						<option>Physician</option>
						<option>Synaecology</option>
						<option>4Dermatology</option>
						<option>Dietition</option>
						<option>Cardiologist</option>
						<option>Senral Surgeon</option>
						<option>Pulmonolist</option>
						<option>Neurosurgeon</option>
						<option>Dentist</option>
						<option>Psychiatist</option>
					</select>
					<Link
						to={{
							pathname: '/doctors',
							state: {
								district: props.location.data.district,
								diseases: diseases || ddiseases,
							},
						}}
					>
						{' '}
						<button
							type='button'
							className='btn btn-success mt-4'
						>
							Submit
						</button>
					</Link>
				</div>
				<div className='dashboard__input__right'>
					<img
						src={connect}
						alt='doctor_image'
						width='500px'
						height='500px'
					/>
				</div>
			</div>
			<div className='dashboard__botton'>
				<img
					src={Bottom}
					alt='procedure'
					width='100%'
					height='1400px'
				/>
			</div>
			<Footer />
		</div>
	);
}
export default Dashboard;
