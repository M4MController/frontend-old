/**
 * Created by Dmitry Zaytsev on 25/03/2018.
 */

'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'src/components/card';

import 'index.scss';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.Header = this.Header.bind(this);
    this.Body = this.Body.bind(this);
    this.Footer = this.Footer.bind(this);
  }

  HeaderOk (props) {
    const message = props.controllersCount > 1 ? 'controllers' : 'controller';
    return (
      <div className="object__header-wrapper">
        <div className="object__header object__header_ok">
          <div className="object__col">
            <h2 className="object__title">{props.name}</h2>
            <span className="object__controllers-info">
              <i className="n-mark n-mark_ok">{props.controllersCount}</i> active {message}
            </span>
          </div>
          <div className="object__col object__col_right">
            <Link to="/" className="btn btn_neutral">MORE</Link>
          </div>
        </div>
      </div>
    );
  }

  HeaderError (props) {
    const message = props.errorsCount > 1 ? 'controllers' : 'controller';
    return (
      <div className="object__header-wrapper">
        <div className="object__header object__header_error">
          <div className="object__col">
            <h2 className="object__title">{props.name}</h2>
            <span className="object__controllers-info">
              <i className="n-mark n-mark_error">{props.controllersErrorsCount}</i> {message} error
            </span>
          </div>
          <div className="object__col object__col_right">
            <Link to="/" className="btn btn_warning">MORE</Link>
          </div>
        </div>
      </div>
    );
  }

  Header (props) {
    const controllersErrorsCount = props.controllersErrorsCount;
    if (controllersErrorsCount && controllersErrorsCount > 0) {
      return <this.HeaderError {...props} />;
    }
    return <this.HeaderOk {...props} />;
  }

  AmountTable (props) {
    const rows = props.children;   
    return (
      <table className="object__col">
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

  AmountTableRow (props) {
    const data = props.children;
    let className = 'amount-table__name';
    let classAmount = 'amount-table__amount';
    if (!props.responsive) {
      className += ' amount-table__row_left';
      classAmount += ' amount-table__row_right';
    }
    return (
      <tr className={props.rowClass}>
        <td className={className}>{data[0]}</td>
        <td className={classAmount}>{data[1]} ₽</td>
      </tr>
    );
  }

  Body (props) {
    const  length = props.counters.length;
    let divider = length / 2;
    const countersArrRight = props.counters.slice(-divider);
    if(length % 2 !== 0) {
      divider++;
    }
    const countersArrLeft = props.counters.slice(0, divider);
    
    return (
      <div className="object__body">
        <this.AmountTable>
          {countersArrLeft.map((c, index) => {
            return (
              <this.AmountTableRow key={index} rowClass="amount-table__row_big">
                {c.name}
                <i className="n-mark n-mark_ok">{c.amount}</i>
              </this.AmountTableRow>
            );
          })}
        </this.AmountTable>
        <this.AmountTable>
          {countersArrRight.map((c, index) => {
            return (
              <this.AmountTableRow key={index} rowClass="amount-table__row_big" responsive="true">
                {c.name}
                <i className="n-mark n-mark_ok">{c.amount}</i>
              </this.AmountTableRow>
            );
          })}
        </this.AmountTable>
      </div>
    );
  }

  Footer (props) {
    return (
      <div className="object__footer">
        <this.AmountTable>
          <this.AmountTableRow>
            <span>Current month</span>
            <i className="n-mark">{props.curMonthAmount}</i>
          </this.AmountTableRow>
          <this.AmountTableRow>
            <span>Last month</span>
            <i className="n-mark">{props.lastMonthAmount}</i>
          </this.AmountTableRow>
          <this.AmountTableRow>
            <span>Year average</span>
            <i className="n-mark">{props.yearAverageAmount}</i>
          </this.AmountTableRow>
        </this.AmountTable>
        <div className="object__col object__col_right">
          <Link to="/" className="btn btn_ok">PAY</Link>
        </div>
      </div>
    );
  }

  render () {
    return (
      <Card>
        <this.Header {...this.props} />
        <this.Body {...this.props} />
        <this.Footer {...this.props} />
      </Card>
    );
  }

  get displayName() {
    return 'Object';
  }
}