/**
 * Created by Dmitry Zaytsev on 25/03/2018.
 */

'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import 'index.scss';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.Header = this.Header.bind(this);
    this.Body = this.Body.bind(this);
  }

  HeaderOk (props) {
    const message = props.controllersCount > 1 ? 'controllers' : 'controller';
    return (
      <div className="o-card__header-wrapper">
        <div className="o-card__header o-card__header_ok">
          <div className="o-card__col">
            <h2 className="o-card__title">{props.name}</h2>
            <span className="o-card__controllers-info">
              <i className="n-mark n-mark_ok">{props.controllersCount}</i> active {message}
            </span>
          </div>
          <div className="o-card__col o-card__col_right">
            <Link to="/" className="btn btn_neutral">MORE</Link>
          </div>
        </div>
      </div>
    );
  }

  HeaderError (props) {
    const message = props.errorsCount > 1 ? 'controllers' : 'controller';
    return (
      <div className="o-card__header-wrapper">
        <div className="o-card__header o-card__header_error">
          <div className="o-card__col">
            <h2 className="o-card__title">{props.name}</h2>
            <span className="o-card__controllers-info">
              <i className="n-mark n-mark_error">{props.controllersErrorsCount}</i> {message} error
            </span>
          </div>
          <div className="o-card__col o-card__col_right">
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

  Counter (props) {
    return (  
      <tr className="o-card__counter-info">
        <td className="o-card__counter-name">{props.name}</td>
        <td className="o-card__counter-amount">
          <i className="n-mark n-mark_ok">{props.amount}</i> ₽
        </td>
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
      <div className="o-card__body">
        <table className="o-card__col">
          {countersArrLeft.map(c => <this.Counter {...c} />)}
        </table>
        <table className="o-card__col o-card__col_right">
          {countersArrRight.map(c => <this.Counter {...c} />)}
        </table>
      </div>
    );
  }

  Footer (props) {
    return (
      <div className="o-card__footer">
        <table className="o-card__col">
          <tr className="o-card__totals-info">
            <td className="o-card__totals-name">Current month</td>
            <td className="o-card__totals-amount">
              <i className="n-mark">{props.curMonthAmount}</i> ₽
            </td>
          </tr>
          <tr className="o-card__totals-info">
            <td className="o-card__totals-name">Last month</td>
            <td className="o-card__totals-amount">
              <i className="n-mark">{props.lastMonthAmount}</i> ₽
            </td>
          </tr>
          <tr className="o-card__totals-info">
            <td className="o-card__totals-name">Year average</td>
            <td className="o-card__totals-amount">
              <i className="n-mark">{props.yearAverageAmount}</i> ₽
            </td>
          </tr>
        </table>
        <div className="o-card__col o-card__col_right">
          <Link to="/" className="btn btn_ok">PAY</Link>
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className="o-card">
        <this.Header {...this.props} />
        <this.Body {...this.props} />
        <this.Footer {...this.props} />
      </div>
    );
  }

  get displayName() {
    return 'ObjectCard';
  }
}