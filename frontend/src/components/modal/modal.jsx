import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import PostShow from '../postings/post_show';
import { closeModal } from '../../actions/modal_actions'

import './modal.css'


function Modal({post}){

    const dispatch = useDispatch()
    const modal = useSelector((state => state.ui.modal))


    function openScroll(){
        dispatch(closeModal());
        document.body.style.position = '';
    }

    if (modal){
        return(        
            <div className='modal-background' onClick={openScroll}>
                <div className='modal-container' onClick={e => e.stopPropagation()}>
                    <div className='modal-child' onClick={e => e.stopPropagation()}>
                        <div onClick={openScroll} id='close-modal'>x</div>
                    </div>
                    <PostShow post={modal}/>
                </div>
            </div>
        )
    }
    return null
}

export default Modal
