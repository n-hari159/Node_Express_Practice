var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://'+configValues.uname+':'+configValues.pwd+'@ds163870.mlab.com:63870/todoapp_personal';
    }
    
}