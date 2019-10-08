import React from 'react';
import './AzureDownload.css';
import { FileByIdUri, FileListUri } from '../../general/constants';

function AzureDownload() {
    const [filenames, setFilenames] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);

        fetch(FileListUri)
            .then(res => res.json())
            .then(setFilenames)
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="AzureDownload">
            <h1>Images</h1>
            {isLoading ? <p>Loading...</p> : null}
            <div className="AzureDownload-images">
                {filenames.map(f => (
                    <div key={f} className="AzureDownload-image-container">
                        <img className="AzureDownload-image" src={`${FileByIdUri}${f}`} alt="alternative text" />
                        <div>{f}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AzureDownload;
