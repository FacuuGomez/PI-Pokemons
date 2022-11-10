import React from "react";

import "./error.css";

const Error = ({ error }) => {
	return (
		<div className='Error'>
			<h5>{error}</h5>
		</div>
	);
};

export default Error;
