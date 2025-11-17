const {TweetRepository}= require('../Repository/index');
const { TweetRepository, HashtagRepository } = require('../Repository/index');

class tweetService {
    constructor(){
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
async create(data){
     const content = data.content;
     const tags = content.match(/#[a-zA-Z0-9_]+/g);// this regex extracts hashtags
     tags = tags.map((tag)=> tag.substring(1));
     console.log(tags);
     const tweet = await this.tweetRepository.create(data);
     return tweet;
}
    async create(data) {
        const content = data.content;
        const tweet = await this.tweetRepository.create(data);
        // regex to extract hashtags and convert to lowercase
        let tags = content.match(/#[a-zA-Z0-9_]+/g)
            .map((tag) => tag.substring(1).toLowerCase());

        // Find already present tags and create a list of their titles
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);

        // Filter out tags that are new
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return { title: tag, tweets: [tweet.id] }
        });

        // Create the new tags in bulk
        await this.hashtagRepository.bulkCreate(newTags);

        // Add the new tweet's ID to the already existing tags
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });

        // TODO: add the hashtags to the tweet model as well

        return tweet;
    }

}


module.exports = tweetService;