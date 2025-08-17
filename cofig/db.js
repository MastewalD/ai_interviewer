const mongoose = require("mongoose")
 require("dotenv").config()
async function Connect(){
   try {
      await mongoose.connect(process.env.dburl)
     console.log("db connected!")
    
   } catch (error) {
    console.log(error)
    console.log("error occured when db connected!")
    process.exit(1)
    
   }
}
module.exports={Connect}