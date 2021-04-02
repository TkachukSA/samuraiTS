import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/formsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reduser";
import {appStateType} from "../../redux/redux.store";
import {Redirect} from "react-router-dom";
import s from '../common/formsControl/FormsControl.module.css'


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null | undefined
}
type CapthaType = {
    captcha?: string | null | undefined
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, CapthaType> & CapthaType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field placeholder={'email'} validate={[required]} name={'email'} component={Input}/>
            </div>
            <div>
                <Field placeholder={'password'} validate={[required]} name={'password'} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={Input}/>
            </div>

            {props.error && <div className={s.FormsControl}>
                {props.error}
            </div>}
            <div>
                {props.captcha && <img src={props.captcha}/>}
                {props.captcha &&
                <div>
                    <Field placeholder={'captcha'} validate={[required]} name={'captcha'} component={Input}/>
                </div>


                }


                <button>Login</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm<FormDataType, CapthaType>({form: 'login'})(LoginForm)


function Login(props: mapDispathToPropsType & mapStateToPropsType) {
    debugger
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)

    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <div>Login</div>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
    </div>

}

type mapDispathToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captha: null | string | undefined) => void
}
type mapStateToPropsType = {
    isAuth: boolean
    captcha: string | null | undefined
}
const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }

}
export default connect<mapStateToPropsType, mapDispathToPropsType, {}, appStateType>(mapStateToProps, {loginTC})(Login)