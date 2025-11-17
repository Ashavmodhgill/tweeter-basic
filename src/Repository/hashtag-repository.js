const Hashtag = require('../models/hashtages');

class HashtagRepository {

    async create(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList) {
        try {
            const tags = await Hashtag.find({
                title: titleList
                title: {
                    $in: titleList
                }
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository;
