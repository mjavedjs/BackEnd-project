class ApiError extends Error {
    constructor(
        statuscode,
        message = 'something    went wrong ',
        errors = []) 
        {
          super(message),
          this.statuscode = statuscode;
          this.data = null;
          this.message = message,
          this.sucess = false
          this.errors = errors
          if (typeof stack !== 'undefined') { // Ya aik stack file jin jin file ma error wo show krdeta hia 
            this.stack = stack;
          }
          else{
            Error.captureStackTrace(this,this.constructor);
          }
        }
}



export { ApiError }