import React from "react";
import './ImageLinkForm.css';
import 'tachyons';

const ImageLinkForm = ({ onInputChange, onButtonDetect }) => {
    return (
        <div>
            <p className="f3 dark-gray">
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className="center">
                <div className="form pa4 br3 shadow-4">
                    <input className="f4 pa2 w-70" type='text' onChange={ onInputChange } />
                    <div className="w-30 br3 grow f4 link ph3 pv2 dib white bg-custom ml3 mr3 mt3 pointer-c" onClick={ onButtonDetect }>Detect</div>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;