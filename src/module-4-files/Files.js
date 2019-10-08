import React from "react";
import "./Files.css";

function Files() {

    // This function should be passed to DropZone component
    const onImagesDropped = React.useCallback(files => {
        
    }, []);

    function Table() {
        return (
            <table className="files-table">
                <thead></thead>
                <tbody></tbody>
            </table>
        );
    }

    return (
        <div className="file-upload">
            <h2>Files</h2>
            <Table />
        </div>
    );
}

export default Files;
