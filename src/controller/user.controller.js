import{ asynchandler } from '../util/asynchandler.js'
const registerUser = asynchandler (async (req, res) => {
   res.status(200).json({
        message: 'Ok'
    });
}); 

export { registerUser };
