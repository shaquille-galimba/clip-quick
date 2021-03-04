import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Loggedin = () => {
	let { accessToken } = useParams();


	return(
		<div>
			You are logged in!
		</div>
	)
}

export default Loggedin;
