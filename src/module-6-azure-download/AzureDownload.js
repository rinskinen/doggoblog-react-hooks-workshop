import React from 'react';
import './AzureDownload.css';
import { FileByIdUri, FileListUri } from '../general/constants';

function AzureDownload() {
    const [filenames, setFilenames] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);

        fetch(FileListUri)
            .then(res => res.json())
            .then(setFilenames)
            .finally(() => setIsLoading(false))
            .catch(err => alert(`${err}: Your doggoimage cannot reach the cloudz`));
    }, []);

    return (
        <div className="AzureDownload">
            <h1>Images</h1>
            <div className="AzureDownload-images">
                {isLoading ? (
                    <div className="ui active dimmer">
                        <div className="loadingDiv ui big text loader">Loading</div>
                    </div>
                ) : null}
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
