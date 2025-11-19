const {TweetRepository, hashtagRepository}= require('../Repository/index');


class tweetService {
    
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new hashtagRepository();
    }
async create(data){
     const content = data.content;
     const  tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag)=> tag.substring(1));// this regex extracts hashtags
     const tweet = await this.tweetRepository.create(data);
     let alreadyPresenttags = await this.hashtagRepository.findByName(tags); 
     let titleOfpresentags= alreadyPresenttags.map((tag)=> tag.title);

     let  newTags = tags.filter(tag => !titleOfpresentags.includes(tag));
     newTags = newTags.map((tag => {
        return {title: tag, tweets: [tweet.id]}
     }))
      await this.hashtagRepository.bulkCreate(newTags);
     alreadyPresenttags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
     })
     return tweet;
}
}




module.exports = tweetService;