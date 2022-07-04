module.exports = {
    notFound: (req, res, next) => {
        const error = {
            error: 'Not Found',
            status: 404
        }
        res.status(404).send(error);
    },
    error500: (error, req, res, next) => {
        res.status(error.status || 500).send({
            status: 'error',
            statusCode: error.status || 500,
            data: null,
            error: {
                status: error.status || 500,
                message: error.message || 'Internal Server Error'
            }
        })
    }
  };