import React, {Component} from 'react'

// const Task = this.props => {
//   console.log("Tasks this.props", props)

class Task extends Component {

  constructor(props) {
    super(props)

    this.state={
      likeCounter: 0
    }
  }

  handleLike = () => {
    this.setState({
      likeCounter: this.state.likeCounter + 1
    })
  }

  render() {
    return (
      <tr>
        <td>{this.props.task.title}</td>
        <td>{this.props.task.description}</td>
        <td><center>{this.props.task.created_at.split("T")[0]}</center></td>
        <td>
          <center><button className="ui button" onClick={() => this.props.handleEditTask(this.props.task)}>Edit</button></center>
        </td>
        <td>
          <center><button className="ui button" onClick={() => this.props.handleSlashTask(this.props.task)}>Slash</button></center>
        </td>
        <td>
          <center><button className="ui button" onClick={() => this.props.handleDeleteTask(this.props.task)}>Delete</button></center>
        </td>
        <td>{this.state.likeCounter} <button className="ui button" onClick={() => this.handleLike()}>Like</button></td>

      </tr>
    )
  }
}

export default Task
