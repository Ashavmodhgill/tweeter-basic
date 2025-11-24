import Like from '../models/like.js';
import CrudRepository from './crud-Repository.js';
class LikeRepository  extends CrudRepository{
    constructor(){
        super(Like);
    }
async findByUserAndLikeable(data){
   try {
    const LIke = await Like.findOne(data);
    return LIke;
    
   } catch (error) {
    throw error;
   }
}
}

export default LikeRepository;