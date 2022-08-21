
const {getdatamodel} = require('../models/models')

const getallemp = async(req,res)=>{
res.send('allemp')
}
const postemp = async(req,res)=>{
res.send('post')
}
const getemp = async(req,res)=>{
res.send('all single')
}
module.exports = {
	getemp,postemp,getallemp
}
