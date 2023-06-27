const mongoose = require("mongoose");
const busSchema = new mongoose.Schema(
  {
    bus_name: { type: String, required: true },
    bus_type: { type: String, required: true },
    time: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    imageUrl: { type: String, required: true },
    totalSeats: { type: Number, required: true },
    available_seats: { type: Number, required: true },
    rate: { type: Number, required: true },
    routes: [],
  },
  {
    timestamps: true,
  }
);

const Bus = mongoose.model("Bus", busSchema);
module.exports = Bus;
