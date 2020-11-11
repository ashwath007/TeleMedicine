import React from 'react';
import '../cssComponent/dashboard.css';
function Dashboard(props) {
	return (
		<div>
			<div className='dashboard'>
				<div className='dashboard__name'>
					<h1>Mediji</h1>
				</div>
				<div className='dashboard__name'>
					<h3>{props.location.data.name}</h3>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
