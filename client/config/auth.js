//this file redirects user back to login if they are not authenticated 
//to view a specific page
module.exports = {
    ensureAuthenticated: function(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg', 'Please log in  to view this resource');
    res.redirect('/users/login');
  } 
}
