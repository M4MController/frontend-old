'use strict';
import React from 'react';

import Spoiler from '../../components/spoiler';

import './index.scss';

/**
 * props objects:
 * bills [array] - array of bill objects
 *
 * bill [object]
 * -title [string] - title
 * -subtitle [string] - bill's subtitle
 * -account [string] - bill's account number
 * -bill_elements [array] - bill' element
 *
 * bill_element [object]
 * -title [string] - naming of current service
 * -price [string] - exact price to pay
 * -controller [string] - controller's name
 */

const test_bills = [
  {title: 'Оператор X', subtitle: 'Какой-то текст типо на латыни', account: '0123456789', bill_elements: [
    {title: 'Элемент 1', price: '1000Р', controller: '1'},
    {title: 'Элемент 2', price: '2000Р', controller: '2'},
    {title: 'Элемент 3', price: '3000Р', controller: '3'},
  ]},
  {title: 'Оператор Y', subtitle: 'Ещё немного текста', account: '0123456789', bill_elements: [
    {title: 'Элемент 1', price: '1000Р', controller: '1'},
    {title: 'Элемент 2', price: '2000Р', controller: '2'},
    {title: 'Элемент 3', price: '3000Р', controller: '3'},
  ]},
];

export default class Finances extends React.Component {
  constructor(props) {
    super(props);

    this.renderSpoilerTitle = this.renderSpoilerTitle.bind(this);
    this.renderSpoilerBody = this.renderSpoilerBody.bind(this);
  }

  renderSpoilerTitle(title, subtitle, account) {
    return (
      <div className='spoiler-header'>
        <div className='spoiler-header-title'>
          <div className='drag-container'>
            <div className='drag-left'>
              {title.toUpperCase()}
            </div>
            <div className='drag-right'>
               Лицевой счёт: {account}
            </div>
          </div>
        </div>
        <div className='spoiler-header-subtitle'>
          {subtitle}
        </div>
      </div>
    );
  }

  renderSpoilerBody(objects) {
    let elements = objects || [];
    return (
      <div className='spoiler-body'>
        {elements.map((elem, id) =>
          <div key={id} className='spoiler-body-element drag-container'>
            <div className='drag-left'>
              <div className='spoiler-body-element-title'><b>{elem.title}</b></div>
              <div className='spoiler-body-element-text'>Оплата по тарифу: {elem.price}</div>
              <div className='spoiler-body-element-text'>Контроллер: {elem.controller}</div>
            </div>
          </div>)}
        <div className='spoiler-body-element drag-container'>
          <div className='drag-right'>
            <span className='spoiler-body-element-text'>
                  Всего к оплате:
            </span>
            <button>Оплатить</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let bills = this.props.bills || test_bills; // []

    return (
      <div>
        <div className='object item col-4'>
          <div className='object-header'>
            <div className='object-header-title'>
                Оплатить
            </div>
          </div>
          <div className='object-body'>
            {bills.map((elem, id) =>
              <Spoiler key={id}
                title={this.renderSpoilerTitle(elem.title, elem.subtitle, elem.account)}
                className='spoiler'>
                {this.renderSpoilerBody(elem.bill_elements)}
              </Spoiler>
            )}

          </div>
        </div>
      </div>
    );
  }
}