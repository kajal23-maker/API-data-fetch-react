import React from 'react';

const User=({id,email,name,phone,website})=>{
	return(
		<div className="container-fluid list">
			<div className="mt-3"><b>Name: </b>{name}</div>
			<div><b>Email: </b>{email}</div>
			<div><b>Phone: </b>{phone}</div>
			<div><b>Website: </b>{website}</div>
		</div>
	)
}

export default User;