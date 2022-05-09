const router = require('express').Router();
const { Comment, User } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: User,
        });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        console.log(comments);
        res.render('single-post', {comments, logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.json(newComment);
        // res.status(500).json(err);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;