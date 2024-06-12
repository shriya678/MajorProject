const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing= require("../models/listing.js");



const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to server");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB =async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"6620c267aea89f13f3d0e8fa"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}
initDB();

const listingId = "65ae9551bdcb104088e31c6a"; // Replace with the actual ID

Listing.findById(listingId)
  .then(listing => {
    // Update the owner information here
    listing.owner = "6620c267aea89f13f3d0e8fa"; // Replace with the new owner ID
    return listing.save();
  })
  .then(updatedListing => {
    console.log("Listing updated successfully:", updatedListing);
  })
  .catch(error => {
    console.error("Error updating listing:", error);
  });