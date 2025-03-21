const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  password:{
    type: String,
    required: true,
  },
    phone: {
      type: Number,
      required: true,
      unique: true
    },
    emergencyPhone: {
      type : Number,
      unique : true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      sparse: true
    },
    address: {
      type: String,
      required: true,
    },
  medicalHistory: [
    {
      diagnosis: String,
      treatment: String,
      date: Date
    }
  ],
  appointments: [
    {
      doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
      date: Date,
      status: {
        type: String,
        enum: ['Scheduled', 'Completed', 'Cancelled'],
        default: 'Scheduled'
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Patient', patientSchema);