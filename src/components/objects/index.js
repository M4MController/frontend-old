import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import * as ObjectAction from 'src/actions/object';
import PropTypes from 'prop-types';
import Object from 'src/components/object';
import Container from 'src/components/container';

function mapStateToProps (state) {
  return {
    objects: state.object,
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(ObjectAction.updateAll, dispatch);
// }

@connect(mapStateToProps)
class Objects extends React.Component {
  static get propTypes () {
    return {
      objects: PropTypes.object.isRequired,
    };

  }
  constructor(props){
    super(props);
  }

  componentWillMount(){
    // this.props.dispatch(ObjectAction.updateAll());
  }

  render(){
    let objReact = this.props.objects.items.map(obj =>
      (<Object {...obj} key={obj.id}/>)
    );
    return (
      <Container>
        {objReact}
      </Container>
    );
  }

}

export default Objects;