import React from 'react';
import cardio from '../assets/cardiology.PNG';
import nail from '../assets/nail.jpeg';
import den from '../assets/dentist.jpg';
import pediat from '../assets/pediat.jpeg';
import '../cssComponent/services.css';
function Services() {
	return (
		<div className='services'>
			<div className='service_h1'>
				<h1>Some of our Services </h1>
			</div>
			<div className='row service_images'>
				<div className='col-sm-3'>
					<div className='card'>
						<img
							class='card-img-top'
							src={cardio}
							alt='Card image cap'
							width='70px'
							height='200px'
						/>
						<div class='card-body'>
							<p class='card-text'>Cardiology</p>
						</div>
					</div>
				</div>
				<div className='col-sm-3'>
					<div className='card'>
						<img
							class='card-img-top'
							src={den}
							alt='Card image cap'
							width='70px'
							height='200px'
						/>
						<div class='card-body'>
							<p class='card-text'>Dentist</p>
						</div>
					</div>
				</div>
				<div className='col-sm-3'>
					<div className='card'>
						<img
							class='card-img-top'
							src={nail}
							alt='Card image cap'
							width='70px'
							height='200px'
						/>
						<div class='card-body'>
							<p class='card-text'>Physiotherapist</p>
						</div>
					</div>
				</div>
				<div className='col-sm-3'>
					<div className='card'>
						<img
							class='card-img-top'
							src={pediat}
							alt='Card image cap'
							width='50px'
							height='200px'
						/>
						<div class='card-body'>
							<p class='card-text'>Pediatrients</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
