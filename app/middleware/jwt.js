const jwt = require('jsonwebtoken');

module.exports = {
    generateAccessToken: (username) =>  {
        return jwt.sign({username: username}, process.env.TOKEN_SECRET, { expiresIn: `${process.env.TOKEN_EXPIRES_IN}h` });
    },
    verifyToken: (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (token == null) return res.sendStatus(401);

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            console.log(err)

            if (err) return res.sendStatus(403);

            req.user = user;
            next()
        })
    }
  };