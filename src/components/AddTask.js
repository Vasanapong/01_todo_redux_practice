import { useState } from 'react'
import { connect } from 'react-redux'

const AddTask = (props) =>{

    const [task,setTask] = useState({title:'',task:'',author:''})

    const handleSubmit = (e) =>{
        e.preventDefault();
        task.id = Date.now().toString()
        let newAllTask = [...props.allTask]
        newAllTask.push(task)
        props.todoSubmit(newAllTask)
        setTask({title:'',task:'',author:''})
    }

    return(
        <div className="add-task">
            <div className="add-task__head">ADD TASK</div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="add-task__title">
                    <label>Title</label><br/>
                    <input type="text" onChange={(e)=>setTask(prev=>{return{...prev,title:e.target.value}})} value={task.title}/>
                </div>
                <div className="add-task__task">
                    <label>Task</label><br/>
                    <input type="text"  onChange={(e)=>setTask(prev=>{return{...prev,task:e.target.value}})} value={task.task}/>
                </div>
                <div className="add-task__author">
                    <label>Author</label><br/>
                    <input type="text"  onChange={(e)=>setTask(prev=>{return{...prev,author:e.target.value}})} value={task.author}/>
                </div>
                <input type="submit" value="Add Task"/>
            </form>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        allTask:state.allTask,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        todoSubmit : (data) => dispatch({type:"TODO_SUBMIT",payload:data})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)