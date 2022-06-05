import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";
import './login.css';
import { connect } from 'react-redux';
import * as actionsTypes from '../../../store/actions/actionsTypes';
import { JsxElement } from "typescript";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Navigate } from 'react-router-dom';
import routes from '../../../globals/routes';



interface IProps {
    onSubmit: () => void;
    login: any
}

interface IState {

}

class LogIn extends Component<IProps, IState> {

    state = {

    };

    componentDidMount(): void {
        console.log('lgoin props: ', this.props);

    }

    handleSubmit = (e) => {
        e.preventDefault();
        // dispatch action
        this.props.onSubmit();
    };

    public render() {

        let loginBtn;

        if (this.props.login.logging) {
            loginBtn = <CircularProgress />;
        } else {
            loginBtn = <Button style={{ "width": "100%" }} variant="primary" type="submit" onClick={this.handleSubmit}>
                Login
            </Button>
        }


        return (
            (this.props.login.loggedin) ? <Navigate to={routes.dashboardPageUrl} replace={true} /> :
                <div className="logInFormDiv">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            {(this.props.login.emailVerificationErr) ? <p style={{"color": "red", "fontSize": "12px"}}>{this.props.login.emailErrMsg}</p> : null}

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            {(this.props.login.psswrdVerificationErr) ? <p style={{"color": "red", "fontSize": "12px"}}>{this.props.login.psswrdErrMsg}</p> : null}
                        </Form.Group>
                        <Form.Group className="mb-3 remeberMeDiv" controlId="formBasicCheckbox">
                            <Form.Check className="rememberMeCheck" type="checkbox" label="Remember me" />
                            <a className="forgotPasswordLink" ref='#'>Forgot password?</a>
                        </Form.Group>
                        <div style={{ "textAlign": "center", "justifyContent": "center" }}>
                            {loginBtn}
                        </div>
                        {(this.props.login.apiErr) ? <p style={{"color": "red", "fontSize": "12px"}}>{this.props.login.apiErrMsg}</p> : null}
                    </Form>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => dispatch({ type: actionsTypes.LOGINCLICKED })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);