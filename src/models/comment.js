import mongoose  from "mongoose";

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,

    },
    userEmail: {
        type: String,
    }
}, {timestamps: true});

const  comment = mongoose.model('Comment', CommentSchema);

export default comment;
