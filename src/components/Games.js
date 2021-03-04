import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Games = () => {
	let { accessToken } = useParams();

	useEffect(() => {
		console.log(accessToken)
	})


	return(
		<div>
			<h1>
				Games component
			</h1>
			<a href='https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=jny1w457iaaovd2755mobky0isvlxk&redirect_uri=http://localhost:3000/loggedin/&scope=analytics:read:extensions'>login</a>
		</div>
	)
}

export default Games;
