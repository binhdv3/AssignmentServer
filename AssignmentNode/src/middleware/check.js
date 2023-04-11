const jwt = require('jsonwebtoken');
const db = require('../config/db/index');

const middleware = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if(token){
            const acssessToken = token.split(" ")[1]
            jwt.verify(acssessToken, db.secret, (err, user)=> {
                if(err){
                    res.status(403).json('token is not valid');
                }
                req.user = user;
                next();
            })
        }else{
            console.log('you are not authenticated');   
            res.redirect('/loginsignup/login')
        }
    }
}

module.exports = middleware;