/**
 * Created by ed on 31/03/2018.
 */

'use strict';

import * as objectActions from 'src/actions/object';

const initialState = { 'items':[{'_rawData':{'id':1,'name':'Имя Объекта','user_id':1,'adres':'Улица Пушкина, Дом Колотушкина'},'id':1,'name':'Имя Объекта','userId':1,'address':'Улица Пушкина, Дом Колотушкина'}]};

export default function(state = initialState, action) {
  switch (action.type) {
    case objectActions.updateAll.toString(): {
      if(!action.items){
        return state;
      }
      return {
        items: action.items,
      };
    }
    default: {
      return state;
    }
  }
}
