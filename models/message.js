var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Mixed = mongoose.Schema.Types.Mixed;

var messageSchema = new Schema({
    conversationId: {
        type: Mixed,
    },
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
        type: Mixed,
    }
});

var message = mongoose.model("message", messageSchema);

module.exports = message;