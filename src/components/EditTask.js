import { connect } from 'react-redux'

const EditTask = (props) =>{

    const handleEditSubmit = (e) =>{
        e.preventDefault();
        let newAllTask = props.allTask.map((item)=>{
            if(item.id === props.editData.id){
                return props.editData
            }
            return item
        })
        props.editSubmit(newAllTask)
    }

    return(
        <div className="edit-task">
            <div className="add-task__head">ADD TASK</div>
            <form onSubmit={(e)=>handleEditSubmit(e)}>
                <div className="edit-task__title">
                    <label>Title</label><br/>
                    <input type="text" value={props.editData.title} name="title" onChange={(e)=>props.editChange(e)}/>
                </div>
                <div className="edit-task__task">
                    <label>Task</label><br/>
                    <input type="text" value={props.editData.task} name="task" onChange={(e)=>props.editChange(e)}/>
                </div>
                <div className="edit-task__author">
                    <label>Author</label><br/>
                    <input type="text" value={props.editData.author} name="author" onChange={(e)=>props.editChange(e)}/>
                </div>
                <input type="submit" value="Edit Task"/>
            </form>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        allTask:state.allTask,
        editData:state.editTask
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        editChange : (data) => dispatch({type:"EDIT_CHANGE",payload:data}),
        editSubmit : (data) => dispatch({type:"EDIT_SUBMIT",payload:data})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTask)