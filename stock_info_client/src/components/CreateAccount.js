import React, {Component} from 'react'

class Account extends Component {
  state = {
    user_name: "",
    password: "",
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    })
  }
  createAccount =(event) => {
    event.preventDefault()
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({user_name: this.state.user_name, password: this.state.password}),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        "Content-Type":"application/json"
      }
    })
    .then(res => res.json())
    .then(resJson => console.log(resJson))
    .catch(err => console.log(err))
  }
  render(){
    return(
  <div className='account'>
    <form action="account-create"
      onSubmit={this.createAccount}>
        <input type="text"
        id="user_name"
        placeholder="username"
        value={this.state.user_name}
        onChange={this.handleChange}
        />
        <input type="text"
        id="password"
        placeholder="password"
        value={this.state.password}
        onChange={this.handleChange}
        />
        <input type="submit"
        id="submit-btn"
        value="Create Account"/>
      </form>
  </div>
    )
  }
}
export default Account
