const getHomepage = (req, res) => {
    res.render('homepage.ejs')
}

const getSample = (req, res) => {
    res.render('sample.ejs')
}

const getABC = (req, res) => {
    res.send('abc')
}

const postCreateUser = (req, res) => {
    console.log(req.body);
    res.send('create a new user');
}

module.exports = {getHomepage, getSample, getABC, postCreateUser};