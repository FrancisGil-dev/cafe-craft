import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    }
    ,password: {
        type: String,
        unique: true,
        required: true,
    },
}, {timestamps: true}
);

// user
const User = mongoose.models.user || mongoose.model("user", userSchema);

// export the User
export default User