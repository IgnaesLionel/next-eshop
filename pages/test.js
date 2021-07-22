import React from "react";
import { useState } from "react";

const test = () => {
  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "nzkx4mre");
    formData.append("cloud_name", "dfqoyvi4w");

    fetch("https://api.cloudinary.com/v1_1/dfqoyvi4w/image/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div>
      <input type="file" onChange={uploadImage} />{" "}
    </div>
  );
};

export default test;
