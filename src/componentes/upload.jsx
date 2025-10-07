import ImageUploader from './FileUploader';
import '../estilos/upload.css';

function Upload() {
  return (
    <div className="upload-page">
      <h1>Página de Upload</h1>
      <ImageUploader />
    </div>
  );
}

export default Upload;