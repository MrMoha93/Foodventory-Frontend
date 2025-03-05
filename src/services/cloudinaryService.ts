import axios from "axios";

const cloudinaryURL = "https://api.cloudinary.com/v1_1/dawvv4e2m/image/upload";

async function saveImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "Khalilis_Foods");

  const response = await axios.post(cloudinaryURL, formData, {
    headers: { "x-auth-token": undefined },
  });

  return response.data.secure_url;
}

export default { saveImage };
