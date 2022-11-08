import PostModel from '../models/post.js';

export const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find().populate('user').exec();
        
        res.json(posts);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Ne poluchit vse',
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;

        PostModel.findOneAndUpdate ({
            _id: postId,
        },
        {
            $inc: { viewsCount: 1},
        },
        {
            returnDocument: 'after',
        },
        (err, doc) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'gde statyua to',
                });
            }

            if (!doc) {
                return res.status(404).json({
                    message: 'netu statyi',
                });
            }

            res.json(doc);
        },
        );
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Ne poluchit odnu',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const postId = req.params.id;

        PostModel.findOneAndDelete({
            _id: postId,
        }, (err, doc) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'ne udalil',
                });
            }

            if (!doc) {
                return res.status(404).json({
                    message: 'netu statyi',
                });
            }
            res.json({
                succes: true,
            });
            },
        );
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'ne udalil'
        })
    }
};

export const update = async (req, res) => {
    try {
        const postId = req.params.id;

        await PostModel.updateOne(
            {
            _id: postId,
            },
            {
                title: req.body.title,
                text: req.body.text,
                imageUrl: req.body.imageUrl,
                tags: req.body.tags,
                user: req.userId, 
            },
        );
        res.json({
            succes: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Ne obnovil',
        });
    }
};

export const create = async (req, res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId,
        });

        const post = await doc.save();

        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Ne sozdalas statya',
        });
    }
};