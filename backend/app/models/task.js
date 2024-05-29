//import { Schema, model } from "mongoose";

import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const taskShema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        done: {
            type: Boolean,
            default: false,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
taskShema.plugin(mongoosePaginate);
export default model("Task", taskShema);