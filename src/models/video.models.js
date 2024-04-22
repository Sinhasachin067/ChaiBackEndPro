import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const userSchema = new Schema({}, { timestamps: true });

videoSchema.plugin(mongooseAggregatePaginate);
export const User = mongoose.model("User", userSchema);
