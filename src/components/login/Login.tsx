import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/formsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reduser";
import {appStateType} from "../../redux/redux.store";
import { Redirect } from "react-router-dom";





type FormDataType={
    email: string
    password: string
    rememberMe: boolean

}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> =(props)=> {
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
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


function Login(props: mapDispathToPropsType & mapStateToPropsType ) {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password,formData.rememberMe)}
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }


    return <div>
        <div>Login</div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}
type mapDispathToPropsType={
    loginTC : (email: string, password: string, rememberMe: boolean) =>void
}
type mapStateToPropsType={
    isAuth: boolean
}
const mapStateToProps=(state:appStateType):mapStateToPropsType=>{
    return{
        isAuth: state.auth.isAuth
    }

}
export default connect<mapStateToPropsType,mapDispathToPropsType,{}, appStateType>(mapStateToProps, {loginTC})(Login)