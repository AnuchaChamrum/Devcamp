import React from 'react';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';


const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
    return (
        <>
            {toDo && toDo
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map((task, index) => {
                    return (
                        <React.Fragment key={task.id}>
                            <div className='col taskBg'>
                                <div className={task.status ? 'done' : ''}>
                                    <span className='taskNumber'>{index + 1}</span>
                                    <span className='taskText'>{task.title}</span>
                                </div>

                                <div className='iconsWrap'>

                                    <span title='Completed / Not Completed'
                                        onClick={() => markDone(task.id)}
                                    >
                                        <CIcon icon={icon.cilCheckCircle} size='sm' height={20} width={20} />
                                    </span>

                                    {task.status ? null : (
                                        <span title='Edit'
                                            onClick={() => setUpdateData({
                                                id: task.id,
                                                title: task.title,
                                                status: task.status ? true : false
                                            })}
                                        >
                                            <CIcon icon={icon.cilPencil} size='sm' height={20} width={20} />
                                        </span>
                                    )}

                                    <span title='Delete'
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        <CIcon icon={icon.cilTrash} size='sm' height={20} width={20} />
                                    </span>
                                    <span>
                                        <label className='fontSize'>Due Date:</label>
                                        <input type="date" />
                                    </span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
        }    
        </>
    )
}
export default ToDo;