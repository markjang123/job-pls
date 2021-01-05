import React from 'react';
import PostShowContainer from '../postings/post_show_container';
import './modal.css'

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';



class Modal extends React.Component{
    constructor(props){
        super(props);
        this.openScroll = this.openScroll.bind(this);
    }

    openScroll(){
        this.props.closeModal();
        document.body.style.position = '';
    }

    render(){
        let { modal } = this.props;
        if (modal === null ) return null;
     

        return(        
            <div className='modal-background' onClick={() => this.openScroll()}>
                <div className='modal-container' onClick={e => e.stopPropagation()}>
                    <div className='modal-child' onClick={e => e.stopPropagation()}>
                        <div onClick={() => this.openScroll(closeModal)} id='close-modal'>x</div>
                    </div>
                    <PostShowContainer post={modal}/>
                </div>
            </div>
        )
    }
}



const mSTP = ({ ui }, modalObject) => {
    return {
        modal: ui.modal,
        proc: modalObject.proc,
        
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mSTP, mDTP)(Modal);
