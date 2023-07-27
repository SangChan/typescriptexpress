export var a = "A"

module.exports = function(req, res, next){
    req.database.query("SELECT * FROM category;", (err, categories) => {
        if (err) throw err;

        req.categories = categories;
        next();
    })
}