import React, { useState, useEffect } from 'react';
import '../cssComponent/doctors.css';
import { Link } from 'react-router-dom';
function Doctors(props) {
	const [dbdoctors, setdbdoctors] = useState([]);
	const [dbdoctors_dis, setdbdoctors_dis] = useState([]);
	// const [doctors, setdoctors] = useState([
	// 	{
	// 		id: 1,
	// 		img:
	// 			'https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=Dr.-Arun-Noah.jpg',
	// 		name: 'Dr Arun',
	// 		Specialist: 'Physiotherapist',
	// 		Hospital: 'KMCH',
	// 	},
	// 	{
	// 		id: 2,
	// 		img:
	// 			'https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=Dr-madhava.jpg',
	// 		name: 'Dr madhavan',
	// 		Specialist: 'Physiotherapist',
	// 		Hospital: 'Appolo',
	// 	},
	// 	{
	// 		id: 3,
	// 		img:
	// 			'https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=Dr. Prakash Kini.jpg',
	// 		name: 'Dr Kumar',
	// 		Specialist: 'Physiotherapist',
	// 		Hospital: 'Stanly',
	// 	},
	// 	{
	// 		id: 4,
	// 		img:
	// 			'https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=Dr. Faiyaz Ali_1.jpg',
	// 		name: 'Dr ALi',
	// 		Specialist: 'Physiotherapist',
	// 		Hospital: 'Kaveri',
	// 	},
	// ]);
	useEffect(() => {
		calling_all_doctors().then(() => {
			call_single_doctor();
		});

		// console.log(dbdoctors);
	}, []);
	const calling_all_doctors = async () => {
		const disease = props.location.state.diseases;
		fetch('https://jsonplaceholder.typicode.com/todos/' + disease, {
			method: 'GET',
			// body: {
			// 	disease: props.location.state.diseases,
			// },
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setdbdoctors(data);
			});
	};
	const call_single_doctor = () => {
		const disease = props.location.state.diseases;
		const district = props.location.state.district;
		fetch(
			'https://jsonplaceholder.typicode.com/todos/' +
				disease +
				'/' +
				district,
			{
				method: 'GET',
				// body: {
				// 	disease: props.location.state.diseases,
				// 	district: props.location.state.district,
				// },
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}
		)
			.then((res) => res.json())
			.then((data) => setdbdoctors_dis(data));
	};
	return (
		<div>
			<div className='doctor_card'>
				{dbdoctors.map((doctor, id) => (
					<div
						className='card doctor_card'
						style={{ width: '18rem' }}
						id={doctor.id}
						key={doctor.id}
					>
						<img
							className='card-img-top'
							src={doctor.img}
							alt={doctor.name}
							height='250px'
						/>
						<div className='card-body'>
							<h5 className='card-title'>
								Name: {doctor.useId}
							</h5>
							<h5 className='card-title'>
								Specialist: {doctor.id}
							</h5>
							<h5 className='card-title'>
								Hospital: {doctor.title}
							</h5>
							<Link
								to={{
									pathname: '/application',
									data: {
										dname: doctor.name,
										hname: doctor.Hospital,
									},
								}}
							>
								<button
									type='button'
									className='btn btn-success '
								>
									Consult
								</button>
							</Link>
						</div>
					</div>
				))}
				<hr />
				{dbdoctors_dis.map((doctor, id) => (
					<div
						className='card doctor_card'
						style={{ width: '18rem' }}
						id={doctor.id}
						key={doctor.id}
					>
						<img
							className='card-img-top'
							src={doctor.img}
							alt={doctor.name}
							height='250px'
						/>
						<div className='card-body'>
							<h5 className='card-title'>
								Name: {doctor.useId}
							</h5>
							<h5 className='card-title'>
								Specialist: {doctor.id}
							</h5>
							<h5 className='card-title'>
								Hospital: {doctor.title}
							</h5>
							<Link
								to={{
									pathname: '/application',
									data: {
										dname: doctor.name,
										hname: doctor.Hospital,
									},
								}}
							>
								<button
									type='button'
									className='btn btn-success '
								>
									Consult
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
			{/* {dbdoctors.map((doc) => (
				<h1>{doc.title}</h1>
			))} */}
		</div>
	);
}

export default Doctors;
