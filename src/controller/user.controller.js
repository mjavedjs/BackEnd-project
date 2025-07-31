import { asynchalder } from "../util/asynchandler.js";

const registerUser = asynchalder(async (req, res) => {
    res.status(200).json({
        message: 'Ok'
    });
});

export { registerUser };
