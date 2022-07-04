module.exports = {
    response: (req, res, next) => {
        res.error = (err, status = 400, meta = {}) => {
            return res.status(status || 400).json({
                status: 'error',
                statusCode: status || 400,
                data: null,
                meta: meta,
                error: err.error || err.errors || err
            });
        };
        res.success = (data, status = 200, meta = {}) => {
            return res.status(status || 200).json({
                status: 'success',
                statusCode: status || 200,
                data: data,
                meta: meta,
                error: null
            });            
        };
        next();
    }
};