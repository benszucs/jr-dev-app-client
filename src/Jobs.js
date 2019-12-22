import Typography from '@material-ui/core/Typography';
import React from 'react';
import Job from './Job';

export default function Jobs({ jobs }) {
	return (
		<div className="jobs">
			<Typography variant="h1">Entry-level software jobs</Typography>
			{jobs.map((job, i) => (
				<Job key={i} job={job} />
			))}
		</div>
	);
}
