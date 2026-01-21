import mongoose  from "mongoose";

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,

    },
    userId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required: true
    },
     onModel:{
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
                required: true,
                refPath: 'onModel'
    },
     Likes: [

            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Like'
            }
         ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
        
}, {timestamps: true});

const  comment = mongoose.model('Comment', CommentSchema);

export default comment;
