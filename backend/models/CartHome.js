const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

// Define Schema
let carthomeSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    titre: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    collection: "carthome",
  }
);

module.exports = mongoose.model("CartHome", carthomeSchema);
