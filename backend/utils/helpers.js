import bcrypt from "bcrypt";
const hashPassword= async (password)=>{
    const salt= await bcrypt.genSalt(10);
    const hash= bcrypt.hash(password, salt);
    return hash;
}

const isPassMatched= async (password, hash)=>{
    return await bcrypt.compare(password, hash);
}
export {hashPassword, isPassMatched};