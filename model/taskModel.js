const mongoose = require("mongoose");

const tasks = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: [20, "to much task length"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("tasks", tasks);
