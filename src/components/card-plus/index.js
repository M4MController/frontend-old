/**
 * Created by Ed on 30/04/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/card';

import 'index.scss';

export default class extends React.Component {
  render () {
    // todo: remove white background
    return (
      <Card>
        <img className="card-plus" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGLSURBVGhD7Zm9LgVBGIaXQiFCKwpBhErlAnARIsRfQ+sqSGjoFEp/iVJ0SkqJyjVIFP4rifC8k5zkRM7sjjPLTPE9yVN8e2Ym856ze7KTrzAMo22W8QY/8Cuxz3iK4/grDrCxyCc+JvQVG3t5wxkMYgk16QVXsAdTM4QnqH3dYy9WottJE1ZdlQ+deI3a25oulNGBeiZ0O+XwS/xkAxVk31Ul9KEG6uHKkQXU/o5dVYIF+SeSBenCERxwVTzJgkyg1rtyVTwWJBYL4sGCxGJBPFiQWCyIh1qD6LVjMtA51Hq3TdeqHEUftQYZRI35Ky/QR61B+lGnyBDvUOvprN3q81buoQ97RmKxIB4sSCwWxIMFicWCeLAgsQzjJe66Kp5kQerGguRGcJBu1MB3V+XHImp/h66q4Ak1WO2u3NhC7W3bVRWoe6rBR6h2Vy7oi1VzVHub1oUqxlAnOk1Qz07trtmEzuMmNkKcYzBK/ICamJM6zwd1dJtRM3Qd1Xg8S6j+oXZwCg3DaIui+AazIoYIcRdsNgAAAABJRU5ErkJggg=="/>
      </Card>
    );
  }

  get displayName() {
    return 'card-plus';
  }

  static get propTypes () {
    return {
      onClick: PropTypes.func,
    };
  }
}