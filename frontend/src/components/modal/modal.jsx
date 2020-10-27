import React from 'react';

class Modal extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let { modal, closeModal } = this.props;
        if (!modal) return null;
        return(
            <div>
                <div className='modal-child' onClick={e => e.stopPropagation()}>
                    <div onClick={closeModal} className='close-modal'>close</div>
                </div>
                <div>
                    Swapping containers will go here, whether it is sign in, sign up, or a job
                    container
                </div>
            </div>
        )
    }
}


export default Modal;
