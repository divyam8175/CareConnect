require('dotenv').config();
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const User = require("./models/User");
// Import Doctor and Patient models
const Doctor = require("./models/Doctor");
const Patient = require("./models/Patient");
const Chat = require("./models/chat.model");
const axios = require('axios');
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

app.get('/api/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching doctors' });
  }
});

// Signup route (without password encryption)
app.post('/api/auth/signup', async (req, res) => {
  const { name, email, password, role, age, gender, phone, emergencyPhone, address, specialization, licenseNumber, licenseExpiry, affiliatedHospital } = req.body;
  console.log('Received signup data:', req.body);
  try {
    // Check if user already exists
    if (role === "doctor") {
    const existingDoctor = await Doctor.findOne({ licenseNumber });
    if (existingDoctor) {
      return res.status(400).json({ error: 'Doctor with this license number already exists' });
    }

    // Store password in plain text

    const newUser = new User({ username: name, email, password, role });
    await newUser.save();

    // Create record in the role-specific collection
    const newDoctor = new Doctor({ 
      user: newUser._id, 
      specialization, 
      role: "doctor",
      licenseNumber,
      licenseExpiry,
      affiliatedHospital,
      availability: []
    });
    await newDoctor.save();
    } else if (role === "patient") {
      
      const existingPatient = await Patient.findOne({ phone });
      if (existingPatient) {
        return res.status(400).json({ error: 'Patient with this phone number already exists' });
      }

      // Store password in plain text

      const newUser = new User({ username: name, email, password, role });
      await newUser.save();
      console.log(newUser);
      const newPatient = new Patient({ 
        user: newUser._id, 
        name,
        age,
        gender,
        phone,
        password,
        emergencyPhone,
        email,
        address,
        medicalHistory: [],
        appointments:[]
      });
      await newPatient.save();
    }
    res.status(201).json({ message: 'Signup successful', });
    
  } catch (error) {
    res.status(500).json({ error: 'Error signing up user' });
  }
});

// Modified Login route (without bcrypt)
app.post('/api/auth/login', async (req, res) => {
  const { email, password, role } = req.body;
  console.log("Received login data:", req.body);
  try {
    // Verify user exists in the User collection
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ error: 'Enter valid credentials' });
    }

    // Directly compare passwords (without hashing)
    if (user.password !== password) {
      console.log("Password does not match");
      return res.status(400).json({ error: 'Enter valid credentials' });
    }

    // Verify the role matches what is stored in User
    if (user.role !== role) {
      console.log("Role does not match");
      return res.status(400).json({ error: 'Enter valid credentials' });
    }

    // Now check the corresponding collection (Doctor or Patient)
    if (role === "doctor") {
      const doctor = await Doctor.findOne({ user: user._id });
      if (!doctor) {
        console.log("Doctor not found");
        return res.status(400).json({ error: 'Enter valid credentials' });
      }
    } else if (role === "patient") {
      const patient = await Patient.findOne({ user: user._id });
      if (!patient) {
        console.log("Patient not found");
        return res.status(400).json({ error: 'Enter valid credentials' });
      }
    } else {
      console.log("Invalid role provided");
      return res.status(400).json({ error: 'Enter valid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ message: 'Login successful', role: user.role, token });
  } catch (error) {
    console.log("Error in try block:", error);
    res.status(500).json({ error: 'Error logging in user' });
  }
});

app.get("/", (req, res) => {
  res.send("Medicus API is running...");
});

// Chatbot route
app.post('/api/auth/chat', async (req, res) => {
  const { message } = req.body;
  
  try {
    const apiKey = process.env.GEMINI_API_KEY;  // Securely accessing the API key
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const postData = {
      contents: [
          {
              role: "user",
              parts: [{ text: message }]
          }
      ]
  };

  const response = await axios.post(apiUrl, postData, {
      headers: {
          'Content-Type': 'application/json'
      }
  });
    let botReply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 
             "Sorry, I couldn't generate a response.";

    if (!Chat) {
      console.error("Chat model is not defined!");
      return res.status(500).json({ error: "Chat model is undefined" });
  }

  botReply = botReply
    .replace(/\*\*(.*?)\*\*/g, '<h3>$1</h3>') // Convert **text** to <h3>text</h3>
    .replace(/\*(.*?)\n/g, '<li>$1</li>')     // Convert *text followed by newline to <li>text</li>
    .replace(/<li>(.*?)<\/li>/g, '<ul><li>$1</li></ul>'); // Wrap <li> elements in <ul>

    console.log("botReply:", botReply);
  try {
    const chat = new Chat({ userMessage: message, botResponse: botReply });
    await chat.save();
} catch (err) {
    console.error("Error saving chat:", err);
}

      res.json({ botReply });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to communicate with AI' });
  
    }
  });


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});