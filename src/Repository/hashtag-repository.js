import Hashtag from '../models/hashtages.js'

import Tweet from '../models/tweet.js';
class hashtagRepository {
    
     async create (data){
        try {
            const tag= await Hashtag.create(data);
             return tag;
        } catch (error) {
            console.log(error);
        }

     }
     async bulkCreate (data){
        try {
            const tags = await  Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
     }

     async get (id){
           try {
            const tag = await  Hashtag.findById(id);
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
         const response = await Hashtag.findByIdAndRemove(id);
             return response;
      } catch (error) {
        console.log(error);
      }

     }

     async findByName(titlelist){
     try {
        const tags = await  Hashtag.find({
        
            title:titlelist
        });
        return tags;
        
     } catch (error) {
        console.log(error);
     }
     }

    
}

export default hashtagRepository;