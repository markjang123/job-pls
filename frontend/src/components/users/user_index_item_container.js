import { connect } from 'react-redux';
import UserIndexItem from './user_index_item';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        modal: state.ui.modal,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: type => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIndexItem);
