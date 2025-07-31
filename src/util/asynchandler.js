
//  by using try catc method

const asynchandler = (fn) =>  async (req,res,next)=>{
    try {
      return   await  fn(req,res,next)
    } catch (error) {
      res.status(error.code || 500).json({
        success: false,
        message: error.message
      })
    }
}

    


// request halder by using then .cathc


// const asynchalder = (func)=>{
//  return   (req,res,next)=>{
//       Promise.resolve(func(req,res,next)).catch((error)=>next(error))
//    }
// }


export  {asynchandler }