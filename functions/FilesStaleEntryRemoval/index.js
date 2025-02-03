/**
 * 
 * @param {import("./types/job").JobRequest} jobRequest 
 * @param {import("./types/job").Context} context 
 */
module.exports = (jobRequest, context) => {
	console.log('Hello from index.js');

	// function input: { job_details: { job_meta_details: { params: { key: 'value' } } } }

	/**
	 * JOB REQUEST FUNCTIONALITIES
	 */

	const projectDetails = jobRequest.getProjectDetails(); // to get the current project details
	const jobDetails = jobRequest.getJobDetails(); // to get the current job details
	const jobMetaDetails = jobRequest.getJobMetaDetails(); // to get the current job's meta details
	const jobpoolDetails = jobRequest.getJobpoolDetails(); // to get the current function job pool's details
	const getJobCapacityAttributes = jobRequest.getJobCapacityAttributes(); // to get the current jobs capacity
	const allJobParams = jobRequest.getAllJobParams(); // to get all the parameters supplied to the job function
	const jobParam = jobRequest.getJobParam('key'); // to get the value of a particular parameter supplied to the job function

	/**
	 * CONTEXT FUNCTIONALITIES
	 */
	context.closeWithSuccess(); //end of application with success
	// context.closeWithFailure(); //end of application with failure
};
