const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  boardId: {type: mongoose.Schema.ObjectId, ref: "board"},
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const table = mongoose.model("table", tableSchema);
module.exports = table;