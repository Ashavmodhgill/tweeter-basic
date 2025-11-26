import {LikeRepository,TweetRepository} from '../Repository/index.js'

class likeService {
constructor(){
    this.LikeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();

}

async toggleLike(modelId,modelType,UserId){ 
    if(modelType == 'Tweet'){
      var likeable = await this.tweetRepository.get(modelId);
      await likeable.populate({path:'Likes'});
      console.log(likeable);
    }else if (modelType == 'comment'){
     // WE WILL DO IT LATER CUREENTLY DONT HAVE REPO OF COMMENTS
    
    }else {
            throw new Error('Invalid Model Type');

    }
    const exists = await this.LikeRepository.findByUserAndLikeable({
        user:UserId,
        onModel: modelType,
        likeable: modelId
    });
    console.log("exists",exists);
    if(exists){
        likeable.Likes.pull(exists.id);
        await likeable.save();
        await this.LikeRepository.destroy(exists.id);
        var isAdded= false;
    }
    else{
        const newLike= await this.LikeRepository.create({
            user: UserId,
            onModel: modelType,
            likeable: modelId
        })
        likeable.Likes.push(newLike);
        await likeable.save();
        isAdded = true;
    }
    return isAdded;
}
}

export default likeService; 