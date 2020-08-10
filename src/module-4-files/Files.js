import React from 'react';
import './Files.css';
import DropZone from '../general/DropZone';

function Files() {
    const [files, setFiles] = React.useState([]);

    //onImagesDropped tiputetaan DropZone komponenetille propsina
    //useCallback on hookki => useCallback palauttaa function, joka on callbackin sisällä
    const onImagesDropped = React.useCallback(files => {
        setFiles(files);
    }, []);

    const deleteFile = name => {
        setFiles(prev => prev.filter(file => file.name !== name));
    };

    const deleteAllFiles = () => {
        setFiles([]);
    };

    function Table() {
        if (files.length === 0) {
            return <p>No doggofiles yet</p>;
        }

        return (
            <table className="files-table">
                <thead>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Type</th>
                    <th>Last modified</th>
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
        <div className="file-upload">
            <DropZone onImagesDropped={onImagesDropped} />
            <h2>Doggopics</h2>
            <Table />
            {files.length > 0 && <button onClick={deleteAllFiles}>Remove all doggofiles</button>}
        </div>
    );
}

export default Files;
