import CrudRepository from "./crud-Repository.js";
 import comment from "../models/comment.js";
class commentRepository extends CrudRepository{
    constructor(){
        super(comment)
    }

    
}





export default commentRepository;