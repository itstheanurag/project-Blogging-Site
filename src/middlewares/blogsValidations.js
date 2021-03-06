const { check, validationResult } = require("express-validator")

exports.validateBlog = [
    check('title')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Title Must be Present')
    .isLength({ min: 6, max: 100 })
    .withMessage('Blog Title must be 6 to 100 Characters long'),

    check('body')
    .trim()
    .not()
    .isEmpty()
    .withMessage("Body Can not be Empty")
    .isLength({min: 100, max : 5000})
    .withMessage('Body must contain 100 to 5000 Characters'),

    check('authorId')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Author Id Must be Present')
    .isLength({equal : 24})
    .withMessage('Author id must be 24 Characters long'),

]

exports.validatedblog = function (req,res,next){
    const error = validationResult(req).array()
    if(!error.length) return next()

    res.status(400).send({status : false, msg: error[0].msg})
}