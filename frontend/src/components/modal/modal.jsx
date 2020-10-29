import React from 'react';
// import LoginFormContainer from '../session/login_form_container';
// import SignupFormContainer from '../session/signup_form_container';
// import PostShowContainer from '../postings/post_show_container';
import PostShow from '../postings/post_show';



import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';



class Modal extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // let { proc, post, closeModal, modal } = this.props;
        console.log(this.props);
        let { modal } = this.props;
        if (modal === null ) return null;
        // console.log(modal)
        console.log('modal: proc bellow');
        // console.log(this.props.modal.proc);
        console.log(this.props);
        console.log('modal: proc above');

        return(        
            <div>
                <div className='modal-child' onClick={e => e.stopPropagation()}>
                    <div onClick={this.props.closeModal} className='close-modal'>close</div>
                </div>
                <div>
                    <PostShow post={modal}/>
                </div>
            </div>
        )
    }
}



const mSTP = ({ ui }, modalObject) => {
    return {
        modal: ui.modal,
        proc: modalObject.proc
        
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mSTP, mDTP)(Modal);
