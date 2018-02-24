
module.exports = [{
    method: 'POST',
    path: '/save',
    handler: (req, reply)=>{
        req.payload.bookStorage;
        reply("Books Data saved");
    }

    
}]