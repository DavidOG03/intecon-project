const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse form data

const uploadsDir = path.join(__dirname, 'uploads');

// Ensure the uploads directory exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  const { passkey, youtubeLink } = req.body;

  // Passkey validation
  const expectedPasskey = 'intecon2024';
  if (passkey !== expectedPasskey) {
    return res.status(403).json({ message: 'Invalid passkey' });
  }

  // Log passkey and received passkey for debugging
  console.log('Expected Passkey:', expectedPasskey);
  console.log('Received Passkey:', passkey);

  // Check for the presence of files or YouTube link
  if (!req.file && !youtubeLink) {
    return res.status(400).json({ message: 'No files or YouTube link provided' });
  }

  // Log YouTube link and uploaded files
  console.log('YouTube Link:', youtubeLink);
  if (req.file) {
    console.log('Uploaded File:', req.file);
  }

  res.status(200).json({ message: 'Files uploaded successfully' });
});

// Serve the uploaded files
app.use('/uploads', express.static(uploadsDir));

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
