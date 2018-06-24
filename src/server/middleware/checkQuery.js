const checkQuery = (req, res , next) => {
    console.log('req.params.query', req.params.query)
    // handle query

    next()
}

export default checkQuery
