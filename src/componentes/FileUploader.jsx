import { useState } from "react";

export default function ImageUploader() {

  // preview guarda la URL de la imagen para vista previa, error guarda mensajes de error de validación. Al comienzo la imagen es nula porq no se cargo nada 
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  // se ejecuta cada vez que el usuario selecciona un archivo.

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validar que sea una imagen con File API
    if (!file.type.startsWith("image/")) {
      setError("El archivo seleccionado no es una imagen.");
      setPreview(null);
      return;
    }

    setError("");
    setPreview(URL.createObjectURL(file));
  };


  // renderizado del componente en pantalla

  return (
    <div className="upload-container">
      <h2 className="upload-title">📷 Subir Imagen</h2>

      <div className="file-input-wrapper">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="file-label">
          Elegir archivo
        </label>
      </div>

      {error && (
        <p className="error-message">{error}</p>
      )}

      {preview && (
        <div className="upload-preview">
          <h3>Vista previa:</h3>
          <img
            src={preview}
            alt="preview"
            className="preview-image"
          />
        </div>
      )}
    </div>
  );
}
