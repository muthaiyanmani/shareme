const catalyst = require('zcatalyst-sdk-node');

module.exports = async (event, context) => {
	try{
		const objectDetails = event.data.object_details[0];
		const objectKey = objectDetails.key;
		const fileId = objectKey.split("/")[0];

		const app = catalyst.initialize(context);
		const response = await app.zcql().executeZCQLQuery(`select * from Files where ID='${fileId}'`);

		const fileDetails = response[0].Files;
		await app.zcql().executeZCQLQuery(`UPDATE Files SET Files.IS_UPLOADED ='true' WHERE Files.ID='${fileId}'`);
		context.closeWithSuccess();
	}catch(err){
		console.error(err);
		context.closeWithFailure();
	}    
}
