import React from 'react';
//

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'Lato' : 'Zima';
	} else {
		return lat > 0 ? 'Zima' : 'Lato';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const text = season === 'Zima' ? 'Jest zimno' : 'Jest ciepło';
	const icon = season === 'Zima' ? 'snowflake' : 'sun';
	return (
		<div>
			<i className={`${icon} icon`} />
			<h1>{text}</h1>
			<i className={`${icon} icon`} />
		</div>
	);
};

export default SeasonDisplay;
