import React from 'react';
import '../cssComponent/landingpage.css';
import { Link } from 'react-router-dom';
function LandingPage() {
	return (
		<div>
			<div className='landingpage'>
				<div className='landingpage__left'>
					<h3>MediJi</h3>
				</div>
				<div className='landingpage__right'>
					<h5>About Mediji</h5>
					<Link to='/details'>
						<button
							type='button'
							className='btn btn-success landingpage__button'
						>
							Find a doctor
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
