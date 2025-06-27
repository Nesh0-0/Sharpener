const errorResponse = (res, statusCode, obj) => {
    const message = obj.message;
    res.status(statusCode).json(
        {
            message: message,
            status: "Not OK!"
        }
    )
}

const successResponse = (res, statusCode, obj) => {
    res.status(statusCode).json(
        {
        data: obj.data,
        status: "OK!"
        }
    )
}

module.exports = {errorResponse, successResponse};
