import { connect } from 'react-redux'

const ViewTask = (props) =>{

    const handleDelete = (id) =>{
        let newAllTask = props.allTask.filter((item)=>{
            return item.id !== id
        })
        props.deleteTask(newAllTask)
    }

    return(
        <div className="view-task">
            {props.allTask.map((item,index)=>{
                return(
                    <div className="view-task__item" key={index}>
                        <div className="view-task__title">{item.title}</div>
                        <div className="view-task__task">{item.task}</div>
                        <div className="view-task__author">{item.author}</div>
                        <button onClick={()=>props.setEditData(item)}>Edit</button>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        allTask:state.allTask
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deleteTask : (data)=> dispatch({type:"DELETE_TASK",payload:data}),
        setEditData : (data)=> dispatch({type:"SET_EDIT_DATA",payload:data})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTask)