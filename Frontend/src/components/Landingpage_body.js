import React from 'react';
import '../cssComponent/landing_page_body.css';
import img from '../assets/docpic.png';
function Landingpage_body() {
	return (
		<div className='page_body'>
			<div className='page_body_left'>
				<h1>Consult Top most Doctors</h1>
				<h1 style={{ marginLeft: '100px', color: 'green' }}>
					from your place
				</h1>
				<p>
					Telemedicine allows health care professionals to
					evaluate, diagnose and treat patients at a distance
					using telecommunications technology. The approach has
					been through a striking evolution in the last decade
					and it is becoming an increasingly important part of
					the American healthcare infrastructure.
				</p>
				<button type='button' className='btn land_btn'>
					Know More
				</button>
			</div>
			<div className='page_body_right'>
				<img src={img} width='260px' />
			</div>
		</div>
	);
}

export default Landingpage_body;
