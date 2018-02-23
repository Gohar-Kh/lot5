var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('sales', {
    name : {type : String, default: 'test'},
    age : {type : Number, default: 12}
});