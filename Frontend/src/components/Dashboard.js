import React from 'react';
import { Link } from 'react-router-dom';
import '../cssComponent/dashboard.css';
function Dashboard(props) {
	return (
		<div>
			<div className='dashboard mt-5 text-success'>
				<div className='dashboard__name'>
					<h1>Mediji</h1>
				</div>
			
			</div>
			<div className="container mt-4 rounder">
			<div className="shadow card">
			<div className='dashboard__name text-center mt-5'>
					<h3>{props.location.data.name}</h3>
				</div>
				<div className="container">
				<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Height</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Weight</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Select Speciality</label>
    <select class="form-control" id="exampleFormControlSelect1">
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
  </div>
  <div className="text-center">
	  <Link to="/showdoc">
  <button type="submit" class="btn btn-primary mt-4 mb-3">Submit</button>

	  </Link>

  </div>
</form>
				</div>
			</div>
			</div>
			
			
		</div>
	);
}

export default Dashboard;
