
import {ChangeAllAddText} from "../../redux/store";
import {addMessageActoinCreator, UpdateNewMessageCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {appStateType} from "../../redux/redux.store";
import {connect} from "react-redux";



type mapDispathToPropsType={
    addMessage: ()=>void
    changeHandler: (body: any)=>void
}


let mapStateToProps=(state:appStateType)=>{
    return{
        dialogsPage: state.dialogsPage
    }

}

let mapDispathToProps=(dispatch:(action: ChangeAllAddText) => void ):mapDispathToPropsType=>{
    return{
        addMessage: ()=>{ dispatch(addMessageActoinCreator())},
        changeHandler: (body: any)=>{dispatch(UpdateNewMessageCreator(body))}
    }}



const DialogsContainer=connect(mapStateToProps,mapDispathToProps)(Dialogs)




export default DialogsContainer