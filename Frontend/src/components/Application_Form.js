import React from 'react';
import '../cssComponent/application.css';
import Image_right from '../assets/Image_right.png';
function Application_Form(props) {
	return (
		<div className='app'>
			<div className='app_img'>
				<img
					src={Image_right}
					alt='imgage'
					width='300px'
					height='500px'
				/>
			</div>
			<div className='application'>
				<h3 style={{ marginLeft: '40%', marginTop: '50px' }}>
					Application Form
				</h3>
				<div className='application__header'>
					<h3>MediTalk</h3>
					<h6>12-11-2020</h6>
				</div>
				<div className='application__middle'>
					<h3>DoctorName : {props.location.data.dname}</h3>
					<h3>HospitalName : {props.location.data.hname}</h3>
				</div>
				<div className='application__footer'>
					<h5>Connect through : </h5>
					<h5>Connect At : 7pm</h5>
				</div>
			</div>
		</div>
	);
}

export default Application_Form;
