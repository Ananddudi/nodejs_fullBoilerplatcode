const mongoose = require('mongoose')

const getemp = new mongoose.Schema({
	name:{
		type:String,
		required:[true,'Please provide name']
	},
	age:{
		type:String,
		default:20,
		min:15,
		max:100
	},
	status:String,
	company:String

})

const getprivatedata = new mongoose.Schema({
	salary:{
		type:Number,
		default:20000
	}
})


const loginschema = new mongoose.Schema({
	email:{
		type:String,
		trim:true,
		lowercase:true,
		required:true,
		match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
	password:String
})

const registerschema = new mongoose.Schema({
	email:{
		type:String,
		trim:true,
		lowercase:true,
		required:true,
		match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
	password:String,
	name:String
})


const getdatamodel = mongoose.model('Empdata',getemp)
const getprivatemodel = mongoose.model('PrivateEnp',getprivatedata)
const registermodel = mongoose.model('register',registerschema)
const loginmodel = mongoose.model('login',loginschema)

module.exports = {
	getprivatemodel,
	getdatamodel,
	registermodel,
	loginmodel
}