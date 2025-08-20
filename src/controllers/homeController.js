const getHomepage = (req, res) => {
    res.render('homepage.ejs')
}

const getSample = (req, res) => {
    res.render('sample.ejs')
}

const getABC = (req, res) => {
    res.send('abc')
}

module.exports = {getHomepage, getSample, getABC};