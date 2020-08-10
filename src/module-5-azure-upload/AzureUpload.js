import React from 'react';
import DropZone from '../general/DropZone';
import './AzureUpload.css';

function AzureUpload(url) {
    const [files, setFiles] = React.useState([]);

    const onImagesDropped = React.useCallback(files => {
        setFiles(files);
    }, []);

    function deleteFile(name) {
        setFiles(prev => prev.filter(file => file.name !== name));
    }

    async function upload() {
        // ajax
        const resp = await fetch(url);
        if (resp.ok) {
            const json = await resp.json();
            setFiles(json);
            alert('Your doggopic iz on its way to the cloudz =)');
        } else {
            alert("Your doggopic did not make it's way to the cloudz...");
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
            <Table />
            {files.length > 0 && <button onClick={upload}>Upload to Azure!</button>}
        </div>
    );
}

export default AzureUpload;
