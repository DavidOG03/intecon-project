import React, { useState } from "react";
import UploadForm from "../components/uploadForm";

const AdminPage = () => {
  // const [passkey, setPasskey] = useState("");
  // const [file, setFile] = useState(null);
  // const [youtubeLink, setYoutubeLink] = useState("");
  // const [message, setMessage] = useState("");

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("passkey", passkey);
  //   formData.append("file", file);
  //   formData.append("youtubeLink", youtubeLink);

  //   try {
  //     const response = await axios.post("/upload", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     if (response.status === 200) {
  //       setMessage("File uploaded successfully!");
  //       setFile(null); // Clear the file input
  //       setPasskey(""); // Optionally clear the passkey
  //       setYoutubeLink(""); // Optionally clear the YouTube link
  //     } else {
  //       setMessage("File upload failed.");
  //     }
  //   } catch (error) {
  //     setMessage(
  //       "Error uploading file. Please check your passkey and try again."
  //     );
  //   }
  // };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Page - Upload Videos
        </h2>
        {/* <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Passkey</label>
            <input
              type="password"
              value={passkey}
              onChange={(e) => setPasskey(e.target.value)}
              className="w-full px-4 py-2 border text-black rounded focus:outline-none"
              placeholder="Enter Passkey"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Video</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded focus:outline-none"
              accept="video/*,image/*"
              required
            />
            {message && <div className="mb-4 text-red-500">{message}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">YouTube Link</label>
            <input
              type="text"
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
              className="w-full px-4 py-2 border text-black rounded focus:outline-none"
              placeholder="Paste YouTube link"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Upload
          </button>
        </form> */}
        <UploadForm/>
      </div>
    </div>
  );
};

export default AdminPage;
