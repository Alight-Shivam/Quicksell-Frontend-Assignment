import React, { Component } from 'react';
import "./modal.css";
import "./form.css"

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', priority: '', user: '' };
    this.handleForm = this.handleForm.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleForm(e) {
    const { name, value } = e.target; 
    this.setState({ [name]: value }); 
  }

  handleSubmit(e){
    e.preventDefault();
    const { title, priority, user } = this.state; 
    let newCard = {
      "id":"CAM-4",
      "title": title,
      "tag":[
         "Feature Request"
      ],
      "userId":user,
      "status":"In progress",
      "priority":priority
   }
   this.props.add(newCard);
  }

  render() {
    const { title, priority, user } = this.state; 
    return (
      <div className='overlay'>
        <div className='modal-content'>
        <button className="close-button" onClick={this.props.handleAddToggle}>
            &times;
          </button>
        <form onSubmit={this.handleSubmit} style={{'textAlign' : 'center', 'height' : '250px', 'marginTop' : '40px'}}>  
          <input
            type='text'
            onChange={this.handleForm}
            name='title'
            placeholder='Title'
            value={title}
          />
          <p></p>
          
          <input
            type='number'
            onChange={this.handleForm}
            name='priority'
            placeholder='Priority'
            min={0}
            max={4}
            value={priority}
          />
          <p></p>
          <input
            type='text'
            onChange={this.handleForm}
            name='user'
            placeholder='User'
            value={user}
          />
          <p></p>
        <button type='submit'>Submit</button>
        </form>
        </div>
      </div>
    );
  }
}
