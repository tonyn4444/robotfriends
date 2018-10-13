import React from 'react';
import Card from '../Card/Card';

const CardList = ({ robots }) => {
	

	return (
		<div>
			{
				robots.map(robot => {
					return (
						<Card
							key={robots.id}
							name={robot.name}
							id={robot.id}
							email={robot.email}
						/>
					)
				})
			}
		</div>
	)
}

export default CardList;