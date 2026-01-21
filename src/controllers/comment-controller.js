import CommentService from "../Services/comment-service.js";
const commentService = new CommentService();
export const createComment= async(req,res)=>{
    try {
        const response = await commentService.create(req.query.modelId,req.query.modelType,req.body.userId,req.body.content);
        return res.status(201).json({
            sucess: true,
            message: 'sucessfully created new comment',
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
