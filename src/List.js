import Task from "./Task"
import "./list.css"
import React, { Component } from 'react'
import { ReactComponent as AddIcon } from './icons/add.svg'
import { ReactComponent as Contrast } from './icons/contrast.svg'
import { ReactComponent as ThreeDots } from './icons/three-dots.svg'
import { ReactComponent as BarOne } from './icons/new/bar-1.svg';
import { ReactComponent as BarTwo } from './icons/new/bar-2.svg';
import { ReactComponent as BarThree } from './icons/new/bar-3.svg';
import { ReactComponent as BarFour } from './icons//new/bar-4.svg';
import { ReactComponent as Todo } from './icons/todo.svg';
import { ReactComponent as Completed } from './icons/done.svg';
import { ReactComponent as Spinner } from './icons/spinner.svg';
import { ReactComponent as Canceled } from './icons/canceled.svg';
import {ReactComponent as Avatar} from './icons/avatar.svg';
 

export default class List extends Component {

  render() {
    let data = this.props.data;
    let CurrIcon = Avatar;


    const listHeight = data.length * 250 + 'px';

    const priorityIcons = {'No Priority' : ThreeDots,'Low' :  BarOne,'Medium' :  BarTwo,'High' :  BarThree,'Urgent' :  BarFour};
    const statusIcons = {'Todo' : Todo, 'Done' :  Completed, 'Backlog' :  Spinner, 'Canceled' :  Canceled, 'In progress': Contrast};
    if(this.props.groupingMode === "Priority"){
      CurrIcon = priorityIcons[this.props.title];
    }
    if(this.props.groupingMode === "status"){
      CurrIcon = statusIcons[this.props.title];
    }

    return (
      <div className="board-main" style={{ height: listHeight }}>
        <div className="list-nav">
          <div className="list-title">
          <p>
            <CurrIcon className="list-nav-icon task-bar-icon"/>
          <span className="list-title-text">{this.props.title}</span><span>&emsp;{this.props.data.length}</span></p>
          </div>
          <div className="list-buttons">
            <AddIcon onClick={this.props.handleAddToggle} className="task-bar-icon list-icons"/>
            <ThreeDots className="three-dots task-bar-icon list-icons"/>
          </div>
        </div>
        {data.map((i,j) => {
            return <Task idx={j} key={i.title} groupingMode={this.props.groupingMode} delete={this.props.delete} task={i}/>
        })}
      </div>
    )
  }
}
