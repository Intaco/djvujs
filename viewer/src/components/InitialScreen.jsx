import React from 'react';

import HelpButton from './HelpButton';
import FileZone from './FileZone';
import DjVu from '../DjVu';
import Options from './Options';

class InitialScreen extends React.Component {

    render() {
        const inExtension = !DjVu.notInExtension && window.chrome && window.chrome.runtime && window.chrome.runtime.id;
        const isChromeExtension = inExtension && !/Firefox/.test(navigator.userAgent);

        return (
            <div className="initial_screen">
                <div className="content">
                    <div className="header">{`DjVu.js Viewer v.${DjVu.Viewer.VERSION} welcomes you!`}</div>
                    <div className="djvujs_version">{`(powered with DjVu.js v.${DjVu.VERSION})`}</div>

                    {inExtension ? <div className="central">
                        <Options />
                        <div className="update_message">
                            Now you can open links to .djvu files automatically (with a click) when the corresponding option is enabled.
                            Just try to click the link
                            "<a target="_blank" rel="noopener noreferrer" href="https://djvu.js.org/assets/djvu_examples/DjVu3Spec.djvu">Some DjVu file</a>"
                            with the option enabled and disabled to understand what it is about.
                        </div>
                    </div> : null}
                    {isChromeExtension ? <div className="previous_update_message">
                        The Google Chrome version of the extension allows to open local files by a browser directly (via a double-click)!
                        But you have to enable the <strong>"Allow access to file URLs"</strong> option on the extension's options page.
                        Otherwise, the feature won't work!
                    </div> : null}
                    <div style={{ clear: 'both' }}>
                        Click the <HelpButton /> button to know more about the app.
                    </div>
                    <FileZone />
                </div>
            </div>
        );
    }
}

export default InitialScreen;