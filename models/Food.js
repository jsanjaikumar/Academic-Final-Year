const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  recipientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  servings: Number,
  email: String,
  name: String,
  contact: String,
  address: String,
  assignedAt: { type: Date, default: Date.now },
});

const foodSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Food Title
  firstName: { type: String, required: true }, // Donor First Name
  lastName: { type: String, required: true }, // Donor Last Name
  servings: { type: Number, required: true }, // Number of Servings
  foodType: { type: String, required: true }, // Food Type (e.g., Veg/Non-Veg)
  expiryDate: { type: Date, required: true }, // Expiry Date
  zip: { type: String, required: true }, // Zip Code
  address: { type: String, required: true }, // Pickup Address (auto-filled)
  countryCode: { type: String, required: true }, // Code + (e.g., +91)
  phone: { type: String, required: true }, // Phone Number
  email: { type: String, required: true }, // Donor's Email
  latitude: { type: Number }, // Auto-filled Latitude
  longitude: { type: Number },
  availableServings: { type: Number, required: true }, // Auto-filled Longitude
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Link to User model
  assignments: [assignmentSchema], // Same as before
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Food", foodSchema);
