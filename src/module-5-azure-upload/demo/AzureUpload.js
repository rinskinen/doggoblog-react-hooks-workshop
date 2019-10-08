import React from 'react';
import DropZone from '../../general/DropZone';
import './AzureUpload.css';
import { FileUploadUri } from '../../general/constants';

const AppStates = {
    Loading: 'Loading',
    Success: 'Success',
    Failure: 'Failure',
    Idle: 'Idle'
};

const renderAppStateIndicator = state => {
    switch (state) {
        case AppStates.Idle:
            return <p></p>;
        case AppStates.Loading:
            return <p>Loading...</p>;
        case AppStates.Success:
            return (
                <p style={{ color: 'green' }}>
                    <b>File(s) uploaded!</b>
                </p>
            );
        case AppStates.Failure:
            return (
                <p style={{ color: 'red' }}>
                    <b>File upload failed!</b>
                </p>
            );
    }
};

function FileUpload() {
    const [files, setFiles] = React.useState([]);
    const [appState, setAppState] = React.useState(AppStates.Idle);
    const [fileUris, setFileUris] = React.useState([]);

    const onImagesDropped = React.useCallback(files => {
        setFiles(files);
    }, []);

    function deleteFile(name) {
        setFiles(prev => prev.filter(file => file.name !== name));
    }

    async function upload() {
        const payload = new FormData();

        files.forEach(file => {
            payload.append('file', file);
        });

        try {
            setAppState(AppStates.Loading);
            const response = await fetch(FileUploadUri, {
                method: 'POST',
                body: payload
            });
            const uris = await response.json();
            setFileUris(fileUris.concat(uris));
            setAppState(AppStates.Success);
            setFiles([]);
        } catch (err) {
            setAppState(AppStates.Failure);
        } finally {
            setTimeout(setAppState, 5000, AppStates.Idle);
        }
    }

    function Table() {
        if (files.length === 0) {
            return <p>No files yet</p>;
        }

        return (
            <table className="demo-files-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Type</th>
                        <th>Last modified</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {files.map(f => {
                        return (
                            <tr key={f.name}>
                                <td>{f.name}</td>
                                <td>{f.size}</td>
                                <td>{f.type}</td>
                                <td>{f.lastModifiedDate.toLocaleString()}</td>
                                <td>
                                    <button onClick={() => deleteFile(f.name)}>Remove</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

    return (
        <div className="demo-file-upload">
            <DropZone onImagesDropped={onImagesDropped} />
            <h1>Files</h1>

            {renderAppStateIndicator(appState)}
            {fileUris.length > 0 && (
                <ul>
                    {fileUris.map((u, i) => (
                        <li key={`${u}_${i}`}>{u}</li>
                    ))}
                </ul>
            )}

            <Table />
            {files.length > 0 && appState !== AppStates.Loading && <button onClick={upload}>Upload to Azure!</button>}
        </div>
    );
}

export default FileUpload;
