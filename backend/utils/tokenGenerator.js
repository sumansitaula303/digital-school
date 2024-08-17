import jwt from "jsonwebtoken"
const generateToken= (id)=>{
    const {sign}= jwt;
    return sign({id}, 'anykey', {expiresIn: '5d'});
}
export default generateToken;