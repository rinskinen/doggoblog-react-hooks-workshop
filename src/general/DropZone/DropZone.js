import React from 'react';
import { useDropzone } from 'react-dropzone';
import './DropZone.css';
import PropTypes from 'prop-types';

function DropZone({ onImagesDropped }) {
    const [images, setImages] = React.useState([]);
    const [files, setFiles] = React.useState([]);
    const [preview, setPreview] = React.useState(false);

    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

    const onDrop = React.useCallback(acceptedFiles => {
        setImages([]);
        setFiles(acceptedFiles);

        acceptedFiles.forEach(file => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
                setImages(prevValue => prevValue.concat(reader.result));
            };

            reader.readAsDataURL(file);
        });
    }, []);

    React.useEffect(() => {
        onImagesDropped(files);
    }, [files, onImagesDropped]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: allowedFileTypes
    });

    return (
        <React.Fragment>
            <h1>Upload</h1>
            <p>
                <strong>Accepted file types:</strong> {allowedFileTypes.join(', ')}{' '}
            </p>
            <div className="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the images here ...</p>
                ) : (
                    <p>Drag &rsquo;n&rsquo; drop some images here, or click to select</p>
                )}
            </div>
            <label style={{ display: 'none' }}>
                <input type="checkbox" checked={preview} onChange={() => setPreview(prevValue => !prevValue)} />
                Show image preview
            </label>
            {preview && (
                <div className="dropzone-images">
                    {images.length > 0 && images.map((img, i) => <img alt={`img_${i}`} key={i} src={img} />)}
                    {images.length === 0 && <p>No images yet</p>}
                </div>
            )}
        </React.Fragment>
    );
}

DropZone.propTypes = {
    onImagesDropped: PropTypes.func.isRequired
};

export default DropZone;
