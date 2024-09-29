import Admin from "../models/adminModel.js";
import verifyToken from "../utils/tokenVerifier.js";

const isLogin= async (req, res, next)=>{
    const headerObj= req.headers;
    const token= headerObj?.authorization?.split(" ")[1];
    const verifiedToken= verifyToken(token);
    if(verifiedToken){
        const user= await Admin.findById(verifiedToken.id).select('name email role')
        req.userAuth= user;
        next();
    }
    else{
        const err= new Error("token expired or invalid");
        next(err);
    }
}
export {isLogin};