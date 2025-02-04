/**
 * 
 * @param {import("./types/job").JobRequest} jobRequest 
 * @param {import("./types/job").Context} context 
 */
module.exports = async (jobRequest, context) => {
	try{
		const resp = await fetch("https://shareme-50024743074.development.catalystappsail.in");
		const data = await resp.json();
		console.log(data)
		context.closeWithSuccess();
	}catch(err){
		console.log(err);
		context.closeWithFailure();
	}
};
