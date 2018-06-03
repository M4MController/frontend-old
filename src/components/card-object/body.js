/**
 * Created by ed on 24/04/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Bubble from 'src/components/bubble';
import {AmountTable, AmountTableRow} from 'src/components/card/amounttable';

const getAllSensors = function(object) {
  return object.controllers.map(controller => controller.sensors).
    reduce((sensors1, sensors2) => sensors1.concat(sensors2), []).
    map(sensor => ({
      id: sensor.id,
      name: sensor.name,
      value: (sensor.data.sort((a, b) => a.date > b.date).concat([{value: 0}]))[0].value,
    }),
    );
};

export default class extends React.Component {
  render() {
    const sensors = getAllSensors(this.props.object);
    let divider = sensors.length / 2;
    const sensorsRight = sensors.slice(-divider);
    if (sensors.length % 2) {
      divider++;
    }
    const sensorsLeft = sensors.slice(0, divider);

    return (
      <div className="object__body">
        <AmountTable>
          {sensorsLeft.map((sensor) => {
            return (
              <AmountTableRow key={sensor.id} rowClass="amount-table__row_big">
                {sensor.name}
                <Bubble mode="ok">{sensor.value}</Bubble>
              </AmountTableRow>
            );
          })}
        </AmountTable>
        <AmountTable>
          {sensorsRight.map((sensor) => {
            return (
              <AmountTableRow key={sensor.id} rowClass="amount-table__row_big" responsive="true">
                {sensor.name}
                <Bubble mode="ok">{sensor.value}</Bubble>
              </AmountTableRow>
            );
          })}
        </AmountTable>
      </div>
    );
  }

  static get displayName() {
    return 'card-object-body';
  }

  static get propTypes() {
    return {
      object: PropTypes.object,
    };
  }
}
