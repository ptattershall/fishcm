import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
    },
    email: {
        type: String,
        require: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    avatar: {
        type: String,
        default: "/images/user-ninja-solid.svg",
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    isSubscribed: {
        type: Boolean,
        default: false,
    },
    subscriptionType: {
        type: String,
        enum: [null, "Tier1", "Tier2", "Tier3"],
        default: null,
    },
});
mongoose.models = {}
const User = mongoose.model.users || mongoose.model("users", userSchema);

export default User;