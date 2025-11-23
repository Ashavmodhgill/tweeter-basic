import tweetService from "../Services/Tweet-service.js";
const TweetService = new tweetService();
export const createTweet= async(req,res)=>{
    try {
        const response = await TweetService.create(req.body);
        return res.status(201).json({
            sucess: true,
            message: 'sucessfully created new tweet',
            data: response,
            err:{}
        });
    } catch (error) {
       return res.status(501).json({
            sucess: false,
            message: 'something went wrong',
            data: {},
            err:error
        });
    }
}

