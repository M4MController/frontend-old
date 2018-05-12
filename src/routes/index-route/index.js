/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import RouteComponent from 'src/routes/route-component';

import Container from 'src/components/container';
import ObjectCard from 'src/components/card-object';

import {selectCardObjects as allObjects} from 'src/selectors/object';

import {fetchForObjectsPage} from 'src/actions/common';

@withRouter
@connect(state => ({
  objects: allObjects(state),
  execution: state.execution,
}))
export default class extends RouteComponent {
  componentWillMount() {
    this.props.dispatch(fetchForObjectsPage());
  }

  render() {
    const loadingState = this.props.execution[fetchForObjectsPage] || {};
    const isEmpty = !this.props.objects.length;

    if (loadingState.running) {
      return <div>LOADING...</div>;
    } else if (loadingState.error) {
      return <div>ERROR</div>;
    } else if (isEmpty) {
      return <div>NO OBJEsCTS</div>;
    } else {
      return (
        <Container>
          {
            this.props.objects.map(object => <ObjectCard key={object.id} object={object}/>)
          }
        </Container>
      );
    }
  }
}
