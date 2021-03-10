import {ChangeAllAddText} from "../../redux/store";
import {addMessageActoinCreator, MessagePageType} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {appStateType} from "../../redux/redux.store";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapDispathToPropsType = {
    addMessage: (value: string) => void
}
type mapStateToPropsType = {
    dialogsPage: MessagePageType,
}

let mapStateToProps = (state: appStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }

}

let mapDispathToProps = (dispatch: (action: ChangeAllAddText) => void): mapDispathToPropsType => {
    return {
        addMessage: (value: string) => {
            dispatch(addMessageActoinCreator(value))
        }
    }
}

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispathToPropsType, {}, appStateType>(mapStateToProps, mapDispathToProps), withAuthRedirect
)(Dialogs)


/*const  withRedirect = withAuthRedirect(Dialogs)


const DialogsContainer = connect<mapStateToPropsType, mapDispathToPropsType, {}, appStateType>(mapStateToProps, mapDispathToProps)(withRedirect)


export default DialogsContainer*/