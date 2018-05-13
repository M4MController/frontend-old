/**
 * Created by YAX on 11/05/2018
 */

'use strict';

import React from 'react';
import RouteComponent from 'src/routes/route-component';

import './index.scss'

const image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNj' +
  'AiIGhlaWdo%0D%0AdD0iMzAxIj4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xLC5j%0D%0AbHMtM3' +
  'tmaWxsOiNmZmZ9LmNscy0xe2ZpbGwtcnVsZTpldmVub2RkfQogICAgICAgIDwvc3R5bGU+%0D%0ACiAgICA8L2RlZnM+CiAgICA8cGF0' +
  'aCBkPSJNMjEuNjM4IDIyOS40MTJoMS4xODVsMjcuMjYzIDY1%0D%0ALjQzMWgxNC44OTFsMjcuMTg5LTY1LjQzMWgxLjE4NVYzMDFoMj' +
  'AuNzQzVjE5My45NTFoLTI2LjNs%0D%0ALTI5LjYzMyA3MS45NmgtMS4zMzNsLTI5LjU1OS03MS45NkguODk0VjMwMWgyMC43NDR2LTcx' +
  'LjU4%0D%0AOHpNMjA5Ljg4NCAzMDF2LTE4LjY5NWgxNHYtMTguNjJoLTE0di02OS43MzRoLTMxLjMzN3EtMjku%0D%0ANzgyIDQ0Ljg4' +
  'My00Mi4zIDY4LjU0N3YxOS44MDdoNTIuM1YzMDFoMjEuMzM2em0tMjItODkuNjE1%0D%0AaDEuMTg2djUyLjk2OGgtMzIuNzQ4di0xLj' +
  'E4N3ExNC40NDctMjYuMTg3IDMxLjU1OS01MS43ODF6%0D%0AbTc4LjgyNSAxOC4wMjdoMS4xODZsMjcuMjYyIDY1LjQzMWgxNC44OTFs' +
  'MjcuMTg5LTY1LjQzMWgx%0D%0ALjE4NVYzMDFoMjAuNzQzVjE5My45NTFoLTI2LjNsLTI5LjYzNCA3MS45NkgzMDEuOWwtMjkuNTU5%0' +
  'D%0ALTcxLjk2aC0yNi4zNzhWMzAxaDIwLjc0M3YtNzEuNTg4eiIgY2xhc3M9ImNscy0xIi8+CiAgICA8%0D%0AcGF0aCBmaWxsPSJyZW' +
  'QiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxNC4xNDggMTQ1LjExMmEx%0D%0ANi4zIDE2LjMgMCAxIDEtMjMuMDYxLS4wMjYgMTYu' +
  'MzQ1IDE2LjM0NSAwIDAgMSAyMy4wNjEuMDI2%0D%0AeiIvPgogICAgPHBhdGggZD0iTTI5MC43MzYgMTY1LjQxMmExMi4xOTEgMTIuMT' +
  'kxIDAgMCAxLTMu%0D%0ANTcxLTguNjcyIDg0Ljk2MyA4NC45NjMgMCAwIDAtODQuNjMtODQuNzQ2IDEyLjIzMyAxMi4yMzMg%0D%0AMC' +
  'AwIDEtLjAyNy0yNC40NjZjNjAuMS4wNjggMTA5LjAyMyA0OS4wNTUgMTA5LjA5IDEwOS4yNGEx%0D%0AMi4yMjQgMTIuMjI0IDAgMCAx' +
  'LTIwLjg2MiA4LjY0NHptLTQ2Ljc0My0uMDg1YTEyLjE5MSAxMi4x%0D%0AOTEgMCAwIDEtMy41Ny04LjY3MiAzNy45MzYgMzcuOTM2ID' +
  'AgMCAwLTM3LjgtMzcuODU0IDEyLjIz%0D%0AMyAxMi4yMzMgMCAwIDEtLjAyNy0yNC40NjYgNjIuMzg1IDYyLjM4NSAwIDAgMSA2Mi4y' +
  'MyA2Mi4z%0D%0AOCAxMi4xNzggMTIuMTc4IDAgMCAxLTIwLjgzMyA4LjYxMnptOTQuMjM3LjEzOWExMi4xOTMgMTIu%0D%0AMTkzIDAg' +
  'MCAxLTMuNTcxLTguNjcyYy0uMTE0LTcyLjkwOS01OS4zNjgtMTMyLjI0NC0xMzIuMTQ0%0D%0ALTEzMi4zMjZBMTIuMjMzIDEyLjIzMy' +
  'AwIDAgMSAyMDIuNDg3IDBhMTU3IDE1NyAwIDAgMSAxNTYu%0D%0ANjM4IDE1Ni44NTQgMTIuMjE1IDEyLjIxNSAwIDAgMS0xMi4yIDEy' +
  'LjIxOSAxMi40MTkgMTIuNDE5%0D%0AIDAgMCAxLTguNjk1LTMuNjA3eiIgY2xhc3M9ImNscy0xIi8+CiAgICA8cmVjdCB3aWR0aD0iMj' +
  'cu%0D%0ANTYzIiBoZWlnaHQ9IjE2NS40NjkiIHg9IjE0My43ODEiIHk9Ii4wMzEiIGNsYXNzPSJjbHMtMyIg%0D%0Acng9IjEzLjc3NS' +
  'Igcnk9IjEzLjc3NSIvPgogICAgPHJlY3Qgd2lkdGg9IjI3LjUzMSIgaGVpZ2h0%0D%0APSIxMzAuMzc1IiB4PSI5Ni4yMTkiIHk9IjM1' +
  'LjEyNSIgY2xhc3M9ImNscy0zIiByeD0iMTMuNzY2%0D%0AIiByeT0iMTMuNzY2Ii8+CiAgICA8cmVjdCB3aWR0aD0iMjcuNTMxIiBoZW' +
  'lnaHQ9IjkwLjI4MSIg%0D%0AeD0iNDguNjU2IiB5PSI3NS4yMTkiIGNsYXNzPSJjbHMtMyIgcng9IjEzLjc2NiIgcnk9IjEzLjc2%0D%' +
  '0ANiIvPgogICAgPHJlY3Qgd2lkdGg9IjI3LjUzMSIgaGVpZ2h0PSI1MC4xMjUiIHg9IjEuMDYzIiB5%0D%0APSIxMTUuMzc1IiBjbGFz' +
  'cz0iY2xzLTMiIHJ4PSIxMy43NjYiIHJ5PSIxMy43NjYiLz4KPC9zdmc+%0D%0ACg==';

export default class extends RouteComponent{
  constructor(props){
    super(props);

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.loginChanged = this.loginChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);

    this.state = {login: '', password: ''};
  }

  login(event){
    if (this.props.loginCallback !== undefined)
      this.props.loginCallback(this.state);

    event.preventDefault();
  }

  register(event){
    if (this.props.registerCallback !== undefined)
      this.props.registerCallback();

    event.preventDefault();
  }

  loginChanged(event){
    this.setState({login: event.target.value, password: this.state.password});
  }

  passwordChanged(event){
    this.setState({login: this.state.login, password: event.target.value});
  }

  render(){
    return (
    <div className='auth-container'>
      <div className='auth-top'>
        <img src={image} className='image-container'/>
      </div>
      <div className='auth-main'>
        <form>
          <h2>Authorization</h2>
          <div className='line-content'>
            <label>Login: </label>
            <input type='text' onChange={this.loginChanged} value={this.state.login} style={{marginLeft: '30px'}}/>
          </div>
          <div className='line-content'>
            <label>Password: </label>
            <input type='password' onChange={this.passwordChanged} value={this.state.password}/>
          </div>
          <div className='buttons-content'>
            <button className='button-style' onClick={this.register}>Register</button>
            <button className='button-style' onClick={this.login}>Log in</button>
          </div>
        </form>
      </div>
    </div>);
  }
}