const mongoose = require('mongoose')


async function connect(){
	try{
	await mongoose.connect(process.env.MONGODB,{
		useNewUrlParser:true,
		useUnifiedTopology:true
	})
	}catch(e){
		console.log("DABABASE error",e.message)
	}

}

module.exports = connect