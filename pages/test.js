import React from "react";
import { useState } from "react";

const test = () => {
  const [picture, setPicture] = useState("");

  const handleUpload = () => {
    fetch("https://api.cloudinary.com/v1_1/dfqoyvi4w/image/upload", {
      method: "POST",
      body: picture,
    });
  };

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "nzkx4mre");
    /*     formData.append("cloud_name", "dfqoyvi4w"); */
    setPicture("formData");
    console.log(picture);
  };

  return (
    <div>
      <input type="file" onChange={uploadImage} />{" "}
      <button onClick={handleUpload}> CLICK </button>
    </div>
  );
};

export default test;
