function authUser(req, res, next) {
    if (!req.body.GoogleId) {
        res.status(403);
        return res.send('You did not submit your Google id along with this request');
    }

    next();
}

module.exports = {
    authUser
}