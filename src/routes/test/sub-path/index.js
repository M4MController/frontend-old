/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';

import RouteComponent from 'src/routes/route-component';

export default class extends RouteComponent {
  render () {
    return (
      <div>
        Test path {this.params.id}
      </div>
    );
  }
}
