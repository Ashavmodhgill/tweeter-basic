
const hashtages = require('../models/hashtages');

class hashtagRepository {
    
     async create (data){
        try {
            const tag= await hashtages.create(data);
             return tag;
        } catch (error) {
            console.log(error);
        }

     }
     async bulkCreate (data){
        try {
            const tags = await hashtages.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
     }

     async get (id){
           try {
            const tag = await hashtages.findById(id);
             return tag;
           } catch (error) {
             console.log(error);
           }
     }
   async getwithComments(id){
    try {
         const tweet = await Tweet.findById(id).populate({path:'comments'}).lean();
             return tweet;
      } catch (error) {
        console.log(error);
      }
       
   }
   
    async destroy (id) {
      try {
         const response = await hashtages.findByIdAndRemove(id);
             return response;
      } catch (error) {
        console.log(error);
      }

     }

     async findByName(titlelist){
     try {
        const tags = await hashtages.find({
            title:titlelist
        });
        return tags;
        
     } catch (error) {
        console.log(error);
     }
     }

    
}

module.exports =  hashtagRepository;