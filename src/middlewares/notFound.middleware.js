const notFound = (req, res) => {
    res.error(
        {
            message: `Cannot ${req.method} ${req.originalUrl}`
        },
        404
    )
}

module.exports = notFound;
