'use strict';
import React from 'react';

import Spoiler from '../../components/spoiler';

import './index.scss';

/**
 * props objects:
 * objects[array] - array of object (houses and etc)
 * -pic [string] - picture of object
 * -title [string] - object's title
 * -address [string] - object's address
 * -controllers [number] - controller's count
 *
 * bills [array] - array of bill objects
 *
 * bill [object]
 * -title [string] - title
 * -subtitle [string] - bill's subtitle
 * -account [string] - bill's account number
 * -bill_elements [array] - bill' element
 * -color [string] - color, if any specified
 *
 * bill_element [object]
 * -title [string] - naming of current service
 * -price [number] - exact price to pay
 * -controller [string] - controller's name
 */

const img = 'https://cdn.torontolife.com/wp-content/uploads/2017/08/toronto-house-for-sale-53-burnhamthorpe-crescent-1-1200x628.jpg';

const test_objects = [
  {title: 'Дом 1', address: 'а, б, в', controllers: 3, pic: img},
  {title: 'Дом 2', address: 'а, б, в', controllers: 1, pic: img},
  {title: 'Дом 3', address: 'а, б, в', controllers: 2, pic: img},
];

const test_bills = [
  {title: 'Оператор X', subtitle: 'Какой-то текст типо на латыни', account: '0123456789', bill_elements: [
    {title: 'Элемент 1', price: 1000, controller: '1'},
    {title: 'Элемент 2', price: 2000, controller: '2'},
    {title: 'Элемент 3', price: 3000, controller: '3'},
  ]},
  {title: 'Оператор Y', subtitle: 'At one point, Stark\'s armor becomes sentient despite fail-safes to prevent its increasingly sophisticated computer systems from doing so. Initially, Stark welcomes this "living" armor for its improved tactical abilities. The armor begins to grow more aggressive, killing indiscriminately and eventually desiring to replace Stark altogether. In the final confrontation on a desert island, Stark suffers another heart attack. The armor sacrifices its own existence to save its creator\'s life, giving up essential components to give Stark a new, artificial heart. This new heart solves Stark\'s health problems, but it does not have an internal power supply, so Stark becomes once again dependent on periodic recharging. The sentient armor incident so disturbs Stark that he temporarily returns to using an unsophisticated early model version of his armor to avoid a repeat incident. He dabbles with using liquid metal circuitry known as S.K.I.N. that forms into a protective shell around his body, but eventually returns to more conventional hard metal armors', account: '0123456789', bill_elements: [
    {title: 'Элемент 1', price: 1000, controller: '1'},
    {title: 'Элемент 2', price: 2000, controller: '2'},
    {title: 'Элемент 3', price: 3000, controller: '3'},
  ]},
];

export default class Finances extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedObject: -1};

    this.selectObject = this.selectObject.bind(this);
    this.renderSpoilerTitle = this.renderSpoilerTitle.bind(this);
    this.renderSpoilerBody = this.renderSpoilerBody.bind(this);
  }

  selectObject(id) {
    let state = {...this.state};
    state.selectedObject = id;
    this.setState(state);
    console.log(this.state);
  }

  renderSpoilerTitle(title, subtitle, account) {
    return (
      <div className='spoiler-header'>
        <div className='spoiler-header-title'>
          <div className='drag-container-row'>
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
          <div key={id} className='spoiler-body-element drag-container-row'>
            <div className='drag-left'>
              <div className='spoiler-body-element-title'><b>{elem.title}</b></div>
              <div className='spoiler-body-element-text'>Оплата по тарифу: {elem.price}&#8381;</div>
              <div className='spoiler-body-element-text'>Контроллер: {elem.controller}</div>
            </div>
            <div className='drag-right drag-middle drag-center'>
              <input className='input-control' type='number'/>&#8381;
            </div>
          </div>)}
        <div className='spoiler-body-element drag-container'>
          <div className='drag-right'>
            <span className='spoiler-body-element-text' style={{marginRight: '$grid-step*4;'}}>
                  Всего к оплате: {elements.reduce((prev, cur) => {
                return prev + cur.price;
              }, 0)}&#8381;
            </span>
            <button className='btn-pay'>Оплатить</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let bills = this.props.bills || test_bills; // []
    let objects = this.props.objects || test_objects; // []

    return (
      <div>
        <div className='panel'>
          {objects.map((elem, id) =>
            <div key={id} onClick={() => this.selectObject(id)}
              className={this.state.selectedObject === id ? 'panel-card-active' : 'panel-card-inactive'}>
              <div className='drag-container-row'>
                <img src={elem.pic} className='drag-left'/>
                <div className='drag-right'>
                  <div className='text-large'>{elem.title}</div>
                  <div className='text-base'>{elem.address}</div>
                  <div className='text-base'><span className='text-base-highlight'>{elem.controllers}</span> active controllers</div>
                </div>
              </div>
            </div>)}
        </div>
        <div className='object item col-5'>
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