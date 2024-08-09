const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse form data
const port = process.env.PORT || 5173;

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('video'), async (req, res) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${Date.now()}_${req.file.originalname}`,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
    ACL: 'public-read',
  };

  try {
    const data = await s3.upload(params).promise();
    res.status(200).json({ videoURL: data.Location });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading video' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



// const uploadsDir = path.join(__dirname, 'uploads');

// // Ensure the uploads directory exists
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir);
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadsDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// app.post('/upload', upload.single('file'), (req, res) => {
//   const { passkey, youtubeLink } = req.body;

//   const expectedPasskey = 'intecon2024';
//   if (passkey !== expectedPasskey) {
//     console.error('Invalid passkey:', passkey);
//     return res.status(403).json({ message: 'Invalid passkey' });
//   }

//   console.log('Passkey is valid');

//   if (!req.file && !youtubeLink) {
//     console.error('No files or YouTube link provided');
//     return res.status(400).json({ message: 'No files or YouTube link provided' });
//   }

//   console.log('YouTube Link:', youtubeLink);
//   if (req.file) {
//     console.log('Uploaded File:', req.file);
//   }

//   console.log('Upload successful');
//   res.status(200).json({
//     message: 'Files uploaded successfully',
//     file: req.file ? {
//       filename: req.file.filename,
//       path: `/uploads/${req.file.filename}`
//     } : null,
//     youtubeLink: youtubeLink || null
//   });
// });

// app.use('/uploads', express.static(uploadsDir));

// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });
