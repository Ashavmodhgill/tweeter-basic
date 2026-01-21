import passport from 'passport';

export const authenticate = (req,res,next) => {
    // this auto matically call the jwt-middlesware we defined in config file 

    passport.authenticate('jwt', (err,user)=> {
       
        if(err) next(err);
        if(!user){
            return res.status(401).json({
                message: 'unauthorized access'
            })
        }
        req.user = user;
        next();
    })(req, res, next);
}

