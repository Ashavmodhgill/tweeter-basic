import User from '../models/User.js';
import CrudRepository from './crud-Repository.js';
class UserRepository  extends CrudRepository{
    constructor(){
        super(User);
    }
 async findby(data){
    try {
        const response = await User.findOne(data);
       return response;
    } catch (error) {
        throw error;
    }
 }
}

export default UserRepository;