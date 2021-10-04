class Response {
    success (res, message, statusCode) {
        res.status(statusCode).send({
            error: '',
            body: message
        });
    }

    error (res, message, statusCode) {
        res.status(statusCode).send({
            error: message,
            body: ''
        });
    }
}

module.exports = Response;
