import React from 'react';
import s from './FormsControl.module.css'

type FormsControlType = {
    input: any
    meta: any
}

export const Input: React.FC<FormsControlType> = ({input, children, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl +' ' +(hasError? s.error: '') } >
            <div>
          <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea: React.FC<FormsControlType> = ({input, children, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl +' ' +(hasError? s.error: '') } >
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

