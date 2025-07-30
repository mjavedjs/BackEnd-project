import { compareSync } from "bcryptjs";
import multer from "multer";

const storage = multer.diskStorage({
    // in this code cb is callback
  destination: function (req, file, cb) {
    cb(null, './Public/temp')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname);
    console.log(file)
  }
})

 export const upload = multer({ storage})