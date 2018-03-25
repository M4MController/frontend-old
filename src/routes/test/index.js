/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';

import RouteComponent from 'src/routes/route-component';
import { Link, Route, Switch } from 'react-router-dom';

import TestPath from './sub-path';
import API from '../../api/Api';

export default class extends RouteComponent {
  render () {
    let button_signin = (
      <button onClick={
        () => {
          let request = API.authorization();
          request.execute('test@test.ru', 'password').then(res => {
            alert('NO ERROR\n' + JSON.stringify(res));
          }).catch(err => {
            alert('ERROR\n' + JSON.stringify(err));
          });
        }
      }>sign_in</button>
    );

    let button_userinfo = (
      <button onClick={
        () => {
          let request = API.userinfo();
          request.execute().then(res => {
            alert('NO ERROR\n' + JSON.stringify(res));
          }).catch(err => {
            alert('ERROR\n' + JSON.stringify(err));
          });
        }
      }>userinfo</button>
    );

    return (
      <div>
        Test route
        {
          [1, 2, 3, 4, 5, 6].map(x => (
            <Link to={`/test/${x}`} key={x.toString()}>{x}</Link>
          ))
        }
        Test API
        {
          button_signin
        }
        {
          button_userinfo
        }
        <Switch>
          <Route path='/test/:id' component={TestPath}/>
        </Switch>
      </div>
    );
  }
}
