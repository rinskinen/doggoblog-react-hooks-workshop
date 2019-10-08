import React from 'react';
import './CustomVision.css';
import { FileListUri, CustomVisionUri } from '../../general/constants';
import PropTypes from 'prop-types';

const categorizeImage = async blobUri => {
    const res = await fetch(`${CustomVisionUri}?url=${blobUri}`);
    let tags = [];
    if (res.ok) {
        tags = res.json();
    }
    return tags;
};

const FileList = ({ fileURIs }) => {
    const fileNameFromURI = fileURI => fileURI.split('/')[fileURI.split('/').length - 1];
    const rowKey = (URI, index) => String.prototype.concat.apply('file_', [fileNameFromURI(URI), index]);
    return (
        <table>
            <thead>
                <tr>
                    <th>image</th>
                    <th>custom vision info</th>
                </tr>
            </thead>
            <tbody>
                {fileURIs.map((fileURI, index) => (
                    <tr key={rowKey(fileURI, index)}>
                        <td>{fileNameFromURI(fileURI)}</td>
                        <td>
                            <button onClick={categorizeImage.bind(null, fileURI)}>Get info</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

FileList.propTypes = {
    fileURIs: PropTypes.arrayOf(PropTypes.string).isRequired
};

const CustomVision = () => {
    const [fileURIs, setFileURIs] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const fileDownload = async () => {
        try {
            setIsLoading(true);
            const res = await fetch(FileListUri);
            const URIs = await res.json();
            setFileURIs(URIs);
        } finally {
            setIsLoading(false);
        }
    };

    React.useEffect(() => {
        fileDownload();
    }, []);

    return (
        <div className="CustomVision">
            <h1>Images</h1>
            {isLoading ? <p>Loading...</p> : <FileList fileURIs={fileURIs} />}
        </div>
    );
};

export default CustomVision;
