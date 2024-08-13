import { useRef, useState } from "react";

import { axios } from "utils/index";

/**
 * @type {(props: { onUpload: (url: string) => void, imageSrc: string } & React.HTMLAttributes<HTMLLabelElement>) => React.JSX.Element}
 */
function ImageUploadInput({ onUpload, imageSrc, ...props }) {
  const fileRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputId = `input-${Math.random().toString(36).substring(7)}`;

  const handleUpload = async () => {
    const file = fileRef.current.files[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/api/file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      onUpload(`/api/static/${response.data.name}`);
    } catch (err) {
      setError("Failed to upload file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <input
        ref={fileRef}
        id={inputId}
        type="file"
        onChange={handleUpload}
        className="hidden"
        readOnly
      />
      <label htmlFor={inputId} {...props}>
        {loading ? (
          <div className="border-8 border-green-400 rounded-2xl w-32 h-32 max-w-full max-h-full animate-spin"></div>
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt="Uploaded file preview"
            className="max-w-full max-h-full object-cover cursor-pointer"
          />
        ) : (
          <span className="text-gray-400 text-3xl text-center items-center justify-center cursor-pointer">
            업로드하기
          </span>
        )}
        {error && <div className="text-red-500">{error}</div>}
      </label>
    </>
  );
}

export default ImageUploadInput;
