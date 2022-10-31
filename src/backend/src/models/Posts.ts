import mongoose, {Schema} from "mongoose";

const PostSchema: Schema = new Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        max: 1000
    },
    image: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    }
},
    { timestamps: true }
);

export default mongoose.model("Post", PostSchema);