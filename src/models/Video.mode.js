import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({
    videoFile:{type:String, required:true},
    thumbnail:{type:String,required:true},
    title:{type:String,required:true},
    descrpition:{type:String,required:true},
    duration:{type:String,required:true},
    view:{type:Number,default:0},
    isPublished:{type:Boolean,default:true},
    owner:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
})

videoSchema.plugin(mongooseAggregatePaginate);
    
export const Video = mongoose.model("Video",videoSchema);
