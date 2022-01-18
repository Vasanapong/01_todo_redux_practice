const initValue = {
    appState: 'addTask',
    allTask : [],
    editTask : {title:'',task:'',author:''}
}

const reducer = (state = initValue, action) =>{
    switch(action.type){
        case "ADD_MODE":
            return {...state,appState:'addTask'}
        case "VIEW_MODE":
            return {...state,appState:'viewTask'}
        case "EDIT_MODE":
            return {...state,appState:'editTask'}
        case "EDIT_CHANGE":
            let newObj = {...state.editTask}
            if(action.payload.target.name === 'title'){
                newObj = {...newObj,title:action.payload.target.value}
                return {...state,editTask:newObj}
            }
            if(action.payload.target.name === 'task'){
                newObj = {...newObj,task:action.payload.target.value}
                return {...state,editTask:newObj}
            }
            if(action.payload.target.name === 'author'){
                newObj = {...newObj,author:action.payload.target.value}
                return {...state,editTask:newObj}
            }
            break;
        case "DELETE_TASK":
            return {...state,allTask:action.payload}
        case "SET_EDIT_DATA":
            return {...state,editTask:action.payload}
        case "TODO_SUBMIT":
            return {...state,allTask:action.payload}
        case "EDIT_SUBMIT":
            return {...state,allTask:action.payload}
        default:
            return {...state}
    }
}

export default reducer

