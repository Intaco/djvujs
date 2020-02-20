import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import Actions from '../actions/actions';
import { get } from '../reducers/rootReducer';
import FileBlock from './FileBlock';

class FilePanel extends React.Component {

    static propTypes = {
        fileName: PropTypes.string,
    };

    render() {
        return (
            <div className="file_panel">
                {this.props.fileName ? (
                    <span title="Close document">
                        <FontAwesomeIcon
                            className="control_button"
                            onClick={this.props.closeDocument}
                            icon={faTimesCircle}
                        />
                    </span>
                ) : null}
                <FileBlock fileName={this.props.fileName} />
            </div>
        );
    }
}

export default connect(state => ({
    fileName: get.fileName(state),
}), {
        closeDocument: Actions.closeDocumentAction
    })(FilePanel);