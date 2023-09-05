import React, {Component} from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {v4 as uuid} from 'uuid'
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import Header from '../Header/index'
import './index.css'

const initialItems = [
  {
    id: uuid(),
    heading: 'To Do',
    items: ['node js', 'react js'],
    on: false,
  },
  {
    id: uuid(),
    heading: 'Teamwork',
    items: [
      'Done',
      'Dashboard',
      'Assignments',
      'Projects',
      'Design Inspiration',
      'Build your own mobile Application',
      'Teach Foundations',
    ],
    on: false,
  },
  {
    id: uuid(),
    heading: 'Assignments',
    items: ['Fundamentals', 'MCQ Test', 'Practical python'],
    on: false,
  },
]

class Todo extends Component {
  state = {
    todolist: initialItems,
    on: false,
    taskinput: '',
    anotherTask: '',
  }

  onDragEnd = result => {
    if (!result.destination) return // dropped outside the list

    const {todolist} = this.state
    const updatedTodolist = [...todolist]
    const sourceIndex = result.source.index
    const destinationIndex = result.destination.index

    // Reorder the list items
    const [movedItem] = updatedTodolist.splice(sourceIndex, 1)
    updatedTodolist.splice(destinationIndex, 0, movedItem)

    this.setState({todolist: updatedTodolist})
  }

  addition = id => {
    const {todolist} = this.state
    const index = todolist.findIndex(item => item.id === id)

    if (index !== -1) {
      const updatedTodolist = [...todolist]
      updatedTodolist[index].on = !updatedTodolist[index].on
      this.setState({todolist: updatedTodolist})
    }
  }

  addition1 = id => {
    const {todolist, taskinput} = this.state
    const index = todolist.findIndex(item => item.id === id)

    if (index !== -1) {
      const updatedTodolist = [...todolist]
      updatedTodolist[index].on = !updatedTodolist[index].on
      updatedTodolist[index].items = [
        ...updatedTodolist[index].items,
        taskinput,
      ]
      this.setState({todolist: updatedTodolist})
    }
  }

  v = e => {
    this.setState({taskinput: e.target.value})
  }

  vv = e => {
    this.setState({anotherTask: e.target.value})
  }

  another = () => {
    this.setState(pre => ({
      on: !pre.on,
    }))
  }

  final = () => {
    const {todolist, anotherTask} = this.state
    const n = {
      id: uuid(),
      heading: anotherTask,
      items: [],
      on: false,
    }
    const update = [...todolist, n]

    this.setState(pre => ({
      on: !pre.on,
      todolist: update,
    }))
  }

  render() {
    const {todolist, on} = this.state

    return (
      <div className="main-container">
        <Header />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="todolist">
            {providedDroppable => (
              <div
                className="todo-container"
                {...providedDroppable.droppableProps}
                ref={providedDroppable.innerRef}
              >
                {todolist.map((it, index) => (
                  <Draggable key={it.id} draggableId={it.id} index={index}>
                    {providedDraggable => (
                      <div
                        ref={providedDraggable.innerRef}
                        {...providedDraggable.draggableProps}
                        {...providedDraggable.dragHandleProps}
                      >
                        <div type="none" className="unorder">
                          <div className="arrange">
                            <h1 className="todo-head">{it.heading}</h1>
                            <BsThreeDots />
                          </div>

                          <ul type="none">
                            {it.items.map(i => (
                              <li className="list-values" key={i}>
                                {i}
                              </li>
                            ))}
                          </ul>
                          {it.on && (
                            <input
                              type="text"
                              className="list-values"
                              onChange={this.v}
                            />
                          )}
                          {!it.on && (
                            <button
                              type="button"
                              className="task-button"
                              onClick={() => this.addition(it.id)}
                            >
                              <AiOutlinePlus />
                              Add Task
                            </button>
                          )}
                          {it.on && (
                            <button
                              type="button"
                              className="task-button1"
                              onClick={() => this.addition1(it.id)}
                            >
                              <AiOutlinePlus />
                              Add Task
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {providedDroppable.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="surya">
          {on && (
            <input type="text" className="list-values" onChange={this.vv} />
          )}
          {!on && (
            <button
              type="button"
              className="task-button1"
              onClick={this.another}
            >
              <AiOutlinePlus />
              Add another list
            </button>
          )}
          {on && (
            <button type="button" className="task-button1" onClick={this.final}>
              Click to Add List
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Todo
