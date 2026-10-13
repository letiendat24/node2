const errorHandler = (err, req, res, next) => {
    res.error(
        {
            message: err.message,
        },
        500
    );
};

module.exports = errorHandler
