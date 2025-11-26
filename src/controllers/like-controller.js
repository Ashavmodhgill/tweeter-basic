import likeService from "../Services/like-service.js";

const LikeService = new likeService();

export const toggleLike = async (req, res)=>{
      try {
        const response = await LikeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(201).json({
            sucess: true,
            message: 'sucessfully liked',
            data: response,
            err:{}
        })
        
      } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess: false,
            message: 'something went wrong',
            data: {},
            err:error
        })
      }
}