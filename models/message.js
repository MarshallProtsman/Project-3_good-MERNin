var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var messageSchema = new Schema({
    messageId: {
        type: String,
    },
    messageInput: {
        type: String,
    },
    messageOutput: {
        type: String,
    },
    createdAt: {
        type: String,
    }
});

var message = mongoose.model("message", messageSchema);

module.exports = message;