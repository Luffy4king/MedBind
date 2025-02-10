import { Schema,model,models } from "mongoose";



const UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true

    },
    fullName:{
        type:String,
        required:false,
        unique:false
    },
    photo:{
        type:String,
        required:true
        
    },lastName:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    isEmailVerified:{
        type:Boolean,
        default:false
    },
    userBio:{
        type:String,
        default:"",
    },
    verificationToken:String,
    verificationExpired:Date,
    resetPasswordToken:String,
    resetPasswordExpires:Date,
    
}, {
    timestamps: true,
},
);

const User = models.User || model("User", UserSchema);

export default User;