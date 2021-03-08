import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

/*class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true
        } );
    }
    deactivateEditMode() {
        this.setState( {
            editMode: false
        } );
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode }>{this.props.status || "-------"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           autoFocus={true}
                           onBlur={ this.deactivateEditMode.bind(this) }
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}*/

export const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)};

        const deactivateEditMode = () => {
            setEditMode(false)
            props.updateStatus(status);
        }

        return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>{props.status || "-------"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}/>
                </div>
                }
            </div>
        )

}