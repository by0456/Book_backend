const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/BookShop', {useNewUrlParser: true}).then(() => {
    console.log("Connected ot MongoDB successfully")

}).catch((e)=>{
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
})


mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
}