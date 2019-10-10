import React from 'react';
import './App.css';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Welcome from '../module-0-introduction/Welcome';
import BlogPost from '../module-1-blog-post/Blog';
import BlogPostExample from '../module-1-blog-post/demo/Blog';
import NewsletterForm from '../module-2-newsletter/NewsletterForm';
import NewsletterFormExample from '../module-2-newsletter/demo/NewsletterForm';
import Counter from '../module-3-counter/Counter';
import CounterExample from '../module-3-counter/demo/Counter';
import FileUpload from '../module-4-files/Files';
import FileUploadExample from '../module-4-files/demo/Files';
import AzureDownload from '../module-6-azure-download/AzureDownload';
import AzureDownloadExample from '../module-6-azure-download/demo/AzureDownload';
import AzureUploadExample from '../module-5-azure-upload/demo/AzureUpload';
import usePersistedTabIndex from './usePersistedTabIndex';
import ComputerVision from '../module-7-computer-vision/ComputerVision';
import ComputerVisionExample from '../module-7-computer-vision/demo/ComputerVision';

function App() {
    const { selectedIndex, onSelect } = usePersistedTabIndex();
    const [useExamples, setUseExamples] = React.useState(false);

    return (
        <div className="App">
            <img alt="logo" className="App-logo" src="/logo-mimmit.png" />
            <label className="App-useExamples">
                <input type="checkbox" checked={useExamples} onChange={() => setUseExamples(prev => !prev)} />
                Use examples
            </label>
            <Tabs selectedIndex={selectedIndex} onSelect={onSelect}>
                <TabList>
                    <Tab>
                        <h3>Start</h3>
                        <span>Introduction</span>
                    </Tab>
                    <Tab>
                        <h3>Module 1</h3>
                        <span>Html elements</span>
                    </Tab>
                    <Tab>
                        <h3>Module 2</h3>
                        <span>Newsletter</span>
                    </Tab>
                    <Tab>
                        <h3>Module 3</h3>
                        <span>Counter</span>
                    </Tab>
                    <Tab>
                        <h3>Module 4</h3>
                        <span>Files</span>
                    </Tab>
                    <Tab>
                        <h3>Module 5</h3>
                        <span>Upload to Azure</span>
                    </Tab>
                    <Tab>
                        <h3>Module 6</h3>
                        <span>Download from Azure</span>
                    </Tab>
                    <Tab>
                        <h3>Module 7</h3>
                        <span>Computer Vision API</span>
                    </Tab>

                    <Tab>
                        <h3>Module 8</h3>
                        <span>Bonus</span>
                    </Tab>
                </TabList>

                <TabPanel>
                    <Welcome />
                </TabPanel>

                <TabPanel>{useExamples ? <BlogPostExample /> : <BlogPost />}</TabPanel>
                <TabPanel>{useExamples ? <NewsletterFormExample /> : <NewsletterForm />}</TabPanel>
                <TabPanel>{useExamples ? <CounterExample /> : <Counter />}</TabPanel>
                <TabPanel>{useExamples ? <FileUploadExample /> : <FileUpload />}</TabPanel>
                <TabPanel>{useExamples ? <AzureUploadExample /> : <AzureUploadExample />}</TabPanel>
                <TabPanel>{useExamples ? <AzureDownloadExample /> : <AzureDownload />}</TabPanel>
                <TabPanel>{useExamples ? <ComputerVisionExample /> : <ComputerVision />}</TabPanel>
                <TabPanel>
                    <p>Module 8</p>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
