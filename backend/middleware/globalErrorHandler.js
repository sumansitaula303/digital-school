const globalerrHandler= (err, req, res, next) => {
    const stack = err.stack;
    const message = err.message;
    const status = err.status ? err.status : "false";
    const errCode = err.statusCode ? err.statusCode : 500; // Corrected variable name
    res.status(errCode).json({ // Use errCode here
        status,
        message,
        stack
    });
}

const notFoundErrHandler= (req, res, next)=>{
    const err= new Error(`can't find ${req.originalUrl} on the server`);
    next(err);
}
export {globalerrHandler, notFoundErrHandler};