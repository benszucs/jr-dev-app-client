import { Paper, Typography } from '@material-ui/core';
import React from 'react';

export default function Jobs({ job, onClick }) {
	return (
		<Paper className="job" onClick={onClick}>
			<div>
				<Typography variant="h6">{job.title}</Typography>
				<Typography variant="h5">{job.company}</Typography>
				<Typography>{job.location}</Typography>
			</div>
			<div>
				<Typography>
					{job.created_at
						.split(' ')
						.slice(0, 3)
						.join(' ')}
				</Typography>
			</div>
		</Paper>
	);
}
