import React from "react";
import {newProfileType} from "../../../redux/profile-reduser";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Input} from "../../common/formsControl/FormsControl";

export type FormDataType={
    fullName: string
    aboutMe: string
    lookingForAJob: boolean

}
type test = {
    profile?: newProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<FormDataType, test> & test> = ({
    profile, handleSubmit,initialValues
                                                                                         }) => {

    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>

        <div>
            <b>full name</b>{initialValues.fullName}
            <Field placeholder={'email'}  name={'fullName'} component={Input}/>
        </div>
        <div>
            <b>about me</b> {initialValues.aboutMe}

            <Field placeholder={'email'}  name={'aboutMe'} component={Input}/>
        </div>
        <div>
            <b>looking For a Job</b>{initialValues.lookingForAJob}
            <Field type={"checkbox"} name={'lookingForAJob'} component={Input}/>
        </div>

    </form>
}


export default ProfileDataForm

export const ProfilReduxForm = reduxForm<FormDataType,test>({form: 'profile'})(ProfileDataForm)
