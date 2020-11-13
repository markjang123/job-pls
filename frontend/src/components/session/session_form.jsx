import React from 'react';
import './session_form.css';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.loginInfo;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.switcharoni = this.switcharoni.bind(this);
        this.formType = this.props.formType;
        this.switchForm = this.props.switchForm;
        this.demoUserLogin = this.demoUserLogin.bind(this);
    }

    demoUserLogin(){
        if(this.formType === 'signup'){
            let sType = this.formType;
            this.formType = this.switchForm;
            this.switchForm = sType;
            this.forceUpdate();        
        };
        let demoUser = {
            email: 'demo-user@demo.com',
            password: 'demofordays'
        };
        this.props.loginUser(demoUser).then(() => {
            this.props.history.push('/jobs');
            this.props.closeModal();
        });
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let loginUser = {
            email: e.currentTarget[0].value,
            password: e.currentTarget[1].value
        }
        const user = Object.assign({}, this.state);
        if (this.formType === 'login') {
            this.props.loginUser(loginUser).then(() => {
                this.props.history.push('/jobs');
                this.props.closeModal();
            });
        } else {
            let newUser = {
                email: e.currentTarget[0].value,
                username: e.currentTarget[1].value,
                password: e.currentTarget[2].value,
                password2: e.currentTarget[3].value,
            }
            this.props.signupUser(newUser).then(() => {
                this.props.history.push('/jobs');
                this.props.closeModal();
            });
        }
    }

    switcharoni(e) {
        e.preventDefault();
        let sType = this.formType;
        let fType = this.switchForm;
        this.formType = this.switchForm;
        this.switchForm = sType;
        this.forceUpdate();
    }


    renderUsername() {
        console.log('render username')
        if (this.formType === 'signup') {
            return (
                <div>
                    <label>
                        <input type="text"
                            placeholder='Username'
                            id='form-element'
                        />
                    </label>
                    <br />
                </div>
            )
        }
    }

    renderPassword2() {
        if (this.formType === 'signup') {
            return (
                <div>
                    <label>
                        <input type="password"
                            placeholder='Password 2'
                            id='form-element'
                        />
                    </label>
                    <br />
                </div>
            )
        }
    }

    renderErrors() {
        return (
            <div>
                <ul id='errors'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    clearErrors() {
        if (this.props.errors.length > 0) {
            return (
                <div 
                    id='clear-errors' 
                    onClick={this.props.clearErrors}>
                        clear errors
                </div>
            )
        }
    }




    render() {
        return (
            <div className='session-form-container'>
                <div className="session-form">
                    <div className='session-form-liner'>
                    <form onSubmit={this.handleSubmit} className="form-header">
                        <br />
                        <div>
                            {this.renderErrors()}
                            {this.clearErrors()}
                            <label>
                                <input type="text"
                                    placeholder='Email'
                                    id='form-element'
                                />
                            </label>
                            <br />
                            {this.renderUsername()}
                            <label>
                                <input type="password"
                                    placeholder='Password'
                                    id='form-element'
                                />
                            </label>
                            {this.renderPassword2()}
                            <br />
                            <input type="submit" id='submit-button' value={this.formType} />
                        </div>
                    </form>
                    <div className="switch-tab">
                        <p 
                            onClick={this.switcharoni} 
                            id='toggle'>
                                 or {this.switchForm}
                        </p>
                    </div>
                    <div className='demo-user-button'>
                        <p 
                            onClick={this.demoUserLogin}>
                                Try for free as a demo
                        </p>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}

export default SessionForm;