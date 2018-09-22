import React from 'react'
import done from '../../assets/images/done.png'
import reject from '../../assets/images/reject.png'


const DoneElements = (props) => {
    const elements = props.tasks.map((task) => {
       if(task.done === 'done') {
           return (
                <div key={task.title}>
                   <div className="task">
                       <p className="regular"><img src={done} alt="done task"/>{task.title}</p>
                   </div>
                </div>
            )} else if(task.done === 'incomplete'){
          return (
              <div className="task" key={task.title}>
                  <p className="regular"><img src={reject} alt="reject task"/>{task.title}</p>
               </div>
          )} else if(task.done === 'progress'){
          return (
              <div className="task" key={task.title}>
                  <p className="white"><i className="fas fa-spinner special-Gold" />{task.title}</p>
               </div>
          )}else {
           return null
       }
    })

    return (
        <div className="tasks">
            {elements}
        </div>
    )
}

export default DoneElements