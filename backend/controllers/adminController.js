const registerAdminController= (req, res)=> {
    try{
        res.status(201).json({
            status: "success",
            data: "admin has been registered"
        })
    }
    catch( error){
        res.json({
            status: "failed",
            error: error.message
        })
    }
}
const loginAdminController= (req, res)=> {
    try{
        res.status(201).json({
            status: "success",
            data: "admin has been logged in"
        })
    }
    catch( error){
        res.json({
            status: "failed",
            error: error.message
        })
    }
}

export {registerAdminController, loginAdminController};