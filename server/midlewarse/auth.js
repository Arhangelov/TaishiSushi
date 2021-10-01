// const { SECRET, COOKIE_NAME } = require('../config/config');
// const jwt = require('jsonwebtoken');

// function auth (req, res, next) {
//     let token = req.cookies[COOKIE_NAME];

//     if(!token) {
//         jwt.verify(token, SECRET, function (err, decoded) {
//             if (err) {
//                 res.clearCookie(COOKIE_NAME);
//             } else {
//                 req.user = decoded;
//             }
//         });
//     }

//     next();
// }

// module.exports = auth

const jwt = require("jsonwebtoken");
const { SECRET, COOKIE_NAME } = require("../config/config");

function auth() {
    return (req, res, next) => {
        let token = req.cookies[COOKIE_NAME];
        if (token) {
            jwt.verify(token, SECRET, (err, decoded) => {
                if (err) {
                    res.clearCookie(COOKIE_NAME);
                } else {
                    req.user = decoded;
                }
            })
        }
        next();
    }
}

function isAuth(req, res, next) {}

module.exports = {
  isAuth,
  auth,
};
