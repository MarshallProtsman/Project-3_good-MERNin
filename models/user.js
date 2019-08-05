var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Mixed = mongoose.Schema.Types.Mixed;

var userSchema = new Schema({
    name: {
        type: String,
    },
    userName: {
        type: String,
    },
    nativeLanguage: {
        type: String,
    },
    targetLanguage: {
        type: String,
    },
    email: {
        type: Mixed,
    },
    password: {
        type: Mixed,
    }
});

var user = mongoose.model("user", userSchema);

module.exports = user;