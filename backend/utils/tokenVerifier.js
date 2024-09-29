import jwt from "jsonwebtoken";
const verifyToken= token => {
    return jwt.verify(token, "anykey", (err, decoded)=> {
        if(err){
            return false;
        }
        else {
            return decoded;
        }
    });
};

export default verifyToken;