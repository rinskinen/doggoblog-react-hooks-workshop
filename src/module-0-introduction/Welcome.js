import React from 'react';

function Welcome() {
    return (
        <div>
            <h1>Mimmit ja Zure koodaa!</h1>
            <p>
                The workshop consists of 7 modules:
                <ul>
                    <li>
                        Module 1: Introduction to basic html elements and React components by creating a simple blog
                        post
                    </li>
                    <li>Module 2: Introduction to forms by handling a newsletter subscription form</li>
                    <li>
                        Module 3: Introduction to state and state handling in React by creating a counter component that
                        persists state
                    </li>
                    <li>Module 4: Introduction to file upload by uploading files to browser using javascript</li>
                    <li>
                        Module 5: Extending previous module by uploading the files to Azure storage with the use of AJAX
                        requests and Azure functions
                    </li>
                    <li>
                        Module 6: Fetching the previously uploaded images from Azure and listing them in the browser
                        window
                    </li>
                    <li>Module 7: Categorizing the uploaded images by utilizing Azure Cognitive Services API</li>
                </ul>
            </p>
            <p>
                <a href="http://zure.ly/mimmitkoodaa">Feedback</a>
            </p>
        </div>
    );
}

export default Welcome;
