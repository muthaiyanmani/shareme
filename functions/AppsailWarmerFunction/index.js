/**
 * 
 * @param {import("./types/job").JobRequest} jobRequest 
 * @param {import("./types/job").Context} context 
 */
module.exports = async (jobRequest, context) => {
	try{
		const { FUNCTION_URL } = process.env;
		const resp = await fetch(FUNCTION_URL);
		context.closeWithSuccess();
	}catch(err){
		console.log(err);
		context.closeWithFailure();
	}
};
