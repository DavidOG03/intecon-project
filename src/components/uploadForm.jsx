import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const UploadForm = () => {
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const togglePassword = (event) => {
    event.preventDefault(); // Prevent form submission on button click
    setShowPassword(!showPassword);
  };

  // const handleSubmit = async (values) => {
  //   // event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("passkey", values.passkey);
  //   if (selectedFile) formData.append("file", selectedFile);
  //   formData.append("youtubeLink", values.youtubeLink);

  //   try {
  //     const response = await axios.post("/upload", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     if (response.status === 200) {
  //       setMessage("File uploaded successfully!");
  //       // setFile(null); // Clear the file input
  //       // setPasskey(''); // Optionally clear the passkey
  //       // setYoutubeLink(''); // Optionally clear the YouTube link
  //       setSelectedFile(null);
  //     } else {
  //       setMessage("File upload failed.");
  //     }
  //   } catch (error) {
  //     setMessage(
  //       "Error uploading file. Please check your passkey and try again."
  //     );
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', video);
  
    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      const videoURL = data.videoURL;
      // Save videoURL and youtubeLink to database
      await saveVideoDetails(videoURL, youtubeLink);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };
  

  return (
    <div>
      <Formik
        initialValues={{
          passkey: "",
          youtubeLink: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Passkey:
              </label>
              <Field
                name="passkey"
                type={showPassword ? "text" : "password"}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                
              />
              <button
                className="show-hide absolute top-[60%] right-0 -translate-y-[40%] border-none bg-transparent p-4"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image:
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                className="mt-1 block w-full text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Video:
              </label>
              <input
                type="file"
                name="video"
                accept="video/*"
                onChange={(event) => {
                  setFieldValue("video", event.currentTarget.files[0]);
                }}
                className="mt-1 block w-full text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                YouTube Link:
              </label>
              <Field
                name="youtubeLink"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Upload
            </button>
          </Form>
        )}
      </Formik>
      {message && (
        <div
          className={`mt-4 p-2 ${
            message.includes("successful") ? "bg-green-200" : "bg-red-200"
          } text-center`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default UploadForm;
