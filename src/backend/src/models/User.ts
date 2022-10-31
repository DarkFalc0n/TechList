import mongoose, {Schema} from "mongoose";

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        min: 6
    },
    password: {
        type: String,
        min: 6,
        required: true
    },
    profilePicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);