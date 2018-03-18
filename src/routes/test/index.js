/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';

import RouteComponent from 'src/routes/route-component';
import { Link, Route, Switch } from 'react-router-dom';

import TestPath from './sub-path';

export default class extends RouteComponent {
  render () {
    return (
      <div>
        Test route
        {
          [1, 2, 3, 4, 5, 6].map(x => (
            <Link to={`/test/${x}`} key={x.toString()}>{x}</Link>
          ))
        }

        <Switch>
          <Route path='/test/:id' component={TestPath}/>
        </Switch>
      </div>
    );
  }
}
