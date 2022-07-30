const  userModel  = require( '../model/userModel.js');
const  bcrypt = require( 'bcryptjs')

const signUp = async (req,res,next)=>{
    try {
        const hashPassword = await bcrypt.hash(req.body.password,10);
        const newUser = new userModel({...req.body,password:hashPassword});
        await newUser.save()
        res.status(200).send("Account created")
    } catch (error) {
        next(error)
    }
}


const signIn = async (req,res,next)=>{
    try {
        const user = await userModel.findOne({name:req.body.name});
        if(!user){
            return res.status(401).send("user not found")
        }
        const isCorrect = await bcrypt.compare(req.body.password,user.password);
        if(!isCorrect){
            return res.status(401).send("Wrong credentials");

        }
        const {password,...others} = user._doc;
        res.status(200).send(others)

    } catch (error) {
        next(error)
    } 
}


module.exports = {signIn,signUp}
