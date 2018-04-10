/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import * as dataActions from 'src/actions/data';

/**
 * @type {{items: {[sensorId]: Array[Sensor]}}}
 */
const initialState = {
  items: {1:[
      {
        "sensorId": 1,
        "date": "2018-04-08T00:00:00Z",
        "value": 365909,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-04-07T00:00:00Z",
        "value": 365714,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-04-06T00:00:00Z",
        "value": 365187,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-04-05T00:00:00Z",
        "value": 364920,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-04-04T00:00:00Z",
        "value": 363765,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-04-03T00:00:00Z",
        "value": 363512,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-04-02T00:00:00Z",
        "value": 362811,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-04-01T00:00:00Z",
        "value": 362409,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-31T00:00:00Z",
        "value": 361659,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-30T00:00:00Z",
        "value": 361180,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-29T00:00:00Z",
        "value": 360680,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-28T00:00:00Z",
        "value": 360991,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-27T00:00:00Z",
        "value": 360009,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-26T00:00:00Z",
        "value": 359861,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-25T00:00:00Z",
        "value": 358649,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-24T00:00:00Z",
        "value": 358613,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-23T00:00:00Z",
        "value": 358333,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-22T00:00:00Z",
        "value": 357539,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-21T00:00:00Z",
        "value": 357288,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-20T00:00:00Z",
        "value": 356999,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-19T00:00:00Z",
        "value": 355853,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-18T00:00:00Z",
        "value": 355178,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-17T00:00:00Z",
        "value": 354510,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-16T00:00:00Z",
        "value": 354712,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-15T00:00:00Z",
        "value": 354440,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-14T00:00:00Z",
        "value": 353027,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-13T00:00:00Z",
        "value": 352519,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-12T00:00:00Z",
        "value": 352747,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-11T00:00:00Z",
        "value": 351639,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-10T00:00:00Z",
        "value": 351297,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-09T00:00:00Z",
        "value": 350710,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-08T00:00:00Z",
        "value": 350482,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-07T00:00:00Z",
        "value": 349916,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-06T00:00:00Z",
        "value": 349997,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-05T00:00:00Z",
        "value": 349044,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-04T00:00:00Z",
        "value": 348372,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-03T00:00:00Z",
        "value": 347673,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-02T00:00:00Z",
        "value": 347386,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-03-01T00:00:00Z",
        "value": 346967,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-28T00:00:00Z",
        "value": 346069,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-27T00:00:00Z",
        "value": 345976,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-26T00:00:00Z",
        "value": 345030,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-25T00:00:00Z",
        "value": 345308,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-24T00:00:00Z",
        "value": 344725,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-23T00:00:00Z",
        "value": 343532,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-22T00:00:00Z",
        "value": 343925,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-21T00:00:00Z",
        "value": 342603,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-20T00:00:00Z",
        "value": 342618,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-19T00:00:00Z",
        "value": 342120,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-18T00:00:00Z",
        "value": 341251,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-17T00:00:00Z",
        "value": 340740,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-16T00:00:00Z",
        "value": 340627,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-15T00:00:00Z",
        "value": 339929,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-14T00:00:00Z",
        "value": 339807,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-13T00:00:00Z",
        "value": 339041,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-12T00:00:00Z",
        "value": 338899,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-11T00:00:00Z",
        "value": 338398,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-10T00:00:00Z",
        "value": 337536,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-09T00:00:00Z",
        "value": 336900,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-08T00:00:00Z",
        "value": 336768,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-07T00:00:00Z",
        "value": 336113,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-06T00:00:00Z",
        "value": 335645,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-05T00:00:00Z",
        "value": 334875,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-04T00:00:00Z",
        "value": 334166,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-03T00:00:00Z",
        "value": 333515,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-02T00:00:00Z",
        "value": 333951,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-02-01T00:00:00Z",
        "value": 332778,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-31T00:00:00Z",
        "value": 332678,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-30T00:00:00Z",
        "value": 332215,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-29T00:00:00Z",
        "value": 331660,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-28T00:00:00Z",
        "value": 330605,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-27T00:00:00Z",
        "value": 330125,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-26T00:00:00Z",
        "value": 329551,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-25T00:00:00Z",
        "value": 329571,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-24T00:00:00Z",
        "value": 328843,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-23T00:00:00Z",
        "value": 328626,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-22T00:00:00Z",
        "value": 327561,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-21T00:00:00Z",
        "value": 327421,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-20T00:00:00Z",
        "value": 326520,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-19T00:00:00Z",
        "value": 326642,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-18T00:00:00Z",
        "value": 325514,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-17T00:00:00Z",
        "value": 325199,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-16T00:00:00Z",
        "value": 325472,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-15T00:00:00Z",
        "value": 324893,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-14T00:00:00Z",
        "value": 324361,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-13T00:00:00Z",
        "value": 323769,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-12T00:00:00Z",
        "value": 323119,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-11T00:00:00Z",
        "value": 322918,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-10T00:00:00Z",
        "value": 322313,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-09T00:00:00Z",
        "value": 321111,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-08T00:00:00Z",
        "value": 321267,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-07T00:00:00Z",
        "value": 320311,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-06T00:00:00Z",
        "value": 320156,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-05T00:00:00Z",
        "value": 319143,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-04T00:00:00Z",
        "value": 318531,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-03T00:00:00Z",
        "value": 318851,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-02T00:00:00Z",
        "value": 318156,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2018-01-01T00:00:00Z",
        "value": 317454,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2017-12-31T00:00:00Z",
        "value": 316626,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      },
      {
        "sensorId": 1,
        "date": "2017-12-30T00:00:00Z",
        "value": 316009,
        "hash": "ff62d9d0-cc92-6a75-16e4-08b4ad1a0537"
      }
    ]},
};

const updateSensor = function(state, action) {
  if (!action.items) return state;

  const filter = data => data.sensorId === action.sensorId && data.date >= action.date;
  return {
    items: {
      ...state.items,
      [action.sensorId]: [
        ...(state.items[action.sensorId] || []).filter(x => !filter(x)),
        ...action.items.filter(filter),
      ],
    },
  };
};

export default function(state = initialState, action) {
  switch (action.type) {
    case dataActions.updateSensor.toString(): {
      return updateSensor(state, action);
    }
    default: {
      return state;
    }
  }
}
