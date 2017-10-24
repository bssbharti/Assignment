import React, { Component  } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import { callApi } from '../apiCaller';

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNo: '',
      address: ''
    }
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    let { name, email, phoneNo, address } = this.state;
    if(name && email && phoneNo && address) {
      console.log("submitted")
      callApi('new', 'post', { name, email, phoneNo, address })
      .then(res => {
        console.log('res: ', res);
      })
      .catch(err => {
        console.error(err);
      });
    }
  }

  render() {
    return (
      <div style={{ padding: 50 }}>
        <form>
          <FormGroup controlId={"formControlsText"}>
            <ControlLabel>Name</ControlLabel>
            <FormControl value={this.state.name} type={'text'} placeholder={"Enter Name"} onChange={(event) => this.setState({name: event.target.value})} />
          </FormGroup>
          <FormGroup controlId={"formControlsText"}>
            <ControlLabel>Email</ControlLabel>
            <FormControl value={this.state.email} type={'email'} placeholder={"Enter email"}  onChange={(event) => this.setState({email: event.target.value})}/>
          </FormGroup>
          <FormGroup controlId={"formControlsText"}>
            <ControlLabel>Phone Number</ControlLabel>
            <FormControl value={this.state.phoneNo} type={'text'} placeholder={"Enter phone number"} onChange={(event) => this.setState({phoneNo: event.target.value})}/>
          </FormGroup>
          <FormGroup controlId={"formControlsText"}>
            <ControlLabel>Address</ControlLabel>
            <FormControl value={this.state.address} type={'text'} placeholder={"Enter address"} onChange={(event) => this.setState({address: event.target.value})}/>
          </FormGroup>
        </form>
        <Button bsStyle="primary" onClick={this.submitForm}>Submit</Button>
      </div>
      )
  }
}
