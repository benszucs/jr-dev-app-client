import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import React from 'react';
import Job from './Job';
import JobModal from './JobModal';

export default function Jobs({ jobs }) {
	// Modal
	const [open, setOpen] = React.useState(false);
	const [selectedJob, selectJob] = React.useState({});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// Pagination
	const [activeStep, setActiveStep] = React.useState(0);
	const numJobs = jobs.length;
	const numPages = Math.ceil(numJobs / 50);
	const jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50);

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	return (
		<div className="jobs">
			<JobModal open={open} job={selectedJob} handleClose={handleClose} />
			<Typography variant="h4" component="h1">
				Entry-level software jobs
			</Typography>
			<Typography variant="h6" component="h1">
				Found {numJobs} jobs
			</Typography>
			{jobsOnPage.map((job, i) => (
				<Job
					key={i}
					job={job}
					onClick={() => {
						handleClickOpen();
						selectJob(job);
					}}
				/>
			))}
			<Typography variant="body1">
				Page {activeStep + 1} of {numPages}
			</Typography>
			<MobileStepper
				variant="dots"
				steps={numPages}
				position="static"
				activeStep={activeStep}
				nextButton={
					<Button size="small" onClick={handleNext} disabled={activeStep === numPages - 1}>
						Next
						<KeyboardArrowRight />
					</Button>
				}
				backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						<KeyboardArrowLeft />
						Back
					</Button>
				}
			/>
		</div>
	);
}
