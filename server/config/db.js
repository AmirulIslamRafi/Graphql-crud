const mongoose = require('mongoose');
const colors = require('colors');
const mongoURL = 'mongodb://localhost:27017/cityService?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'


const connectToMongo = async ()=>{
 const con =  await  mongoose.connect(mongoURL);
        console.log(`Connect To Mongo Successfuly on server : ${con.Collection.collectionName}`.brightMagenta.underline.bold );
    
};

module.exports = connectToMongo;