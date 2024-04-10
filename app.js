const express = require('express')

const app = express();


const operations = require('./operations.js')
const convert = require('./helper')

const ExpressError = require('./expressError')



// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


app.get('/mean', (req, res, next) => {
    // res.send("Mean")
    if (!req.query.nums){
        throw new ExpressError('Please pass in a query key with a list of comma-seperated numbers', 400)
    }
    let numString = req.query.nums.split(',');

    let nums = convert(numString);

    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: operations.mean(nums)
    }

    return res.send(result);

})

app.get('/median', (req, res, next) => {
    if (!req.query.nums){
        throw new ExpressError('Please pass in a query key with a list of comma-seperated numbers', 400)
    }
    let numString = req.query.nums.split(',');

    let nums = convert(numString);

    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: "median",
        result: operations.median(nums)
    }

    return res.send(result);
})

app.get('/mode', (req, res, next) => {
    if (!req.query.nums){
        throw new ExpressError('Please pass in a query key with a list of comma-seperated numbers', 400)
    }
    let numString = req.query.nums.split(',');

    let nums = convert(numString);

    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: "mode",
        result: operations.mode(nums)
    }

    return res.send(result);

})

// error handler
app.use(function (req,res,next) {
    const err = new ExpressError("Not Found", 404)

    return next(err);
})

app.use(function (req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message,
    });
});
// app.listen should go last
app.listen(3000, function() {
    console.log('Server starting on port 3000');
})

