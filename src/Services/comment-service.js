import { commentRepository,TweetRepository} from "../Repository/index.js";

class commentService{
    constructor(){
        this.CommentRepo = new commentRepository();
        this.tweetRepo = new TweetRepository();
    }

    async create(modelId,modelType,userId,content){
        if(modelType == 'Tweet'){
      var commentable= await this.tweetRepo.get(modelId);
      console.log(commentable);
    }else if (modelType == 'comment'){
      var commentable= await this.CommentRepo.get(modelId);

    }else {
            throw new Error('Invalid Model Type');

    }
    if(!commentable) {
        throw new Error('Unable to find the model to comment on. Please check the modelId.');
    }
   
    const comment = await this.CommentRepo.create({
        content: content,
        userId: userId,
        onModel: modelType,
        commentable: modelId,
        comments:[],
        Likes: []
        
    });
    commentable.comments.push(comment.id);
    await commentable.save();
    return comment;
    }
}

export default commentService;