import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  withStyles,
} from '@material-ui/core';
import { AZUL_ESCURO } from '../../../utils/colors';

const styles = () => ({
  root: {
    backgroundColor: AZUL_ESCURO,
    color: '#fafafa',
    borderRadius: 0,
    paddingTop: '18px',
  },
  menuTab: {
    fontSize: '16px',
  },

});

class NavBar extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      pagenumber: 0
    };
  }
  
  render() {

    const {
      history,
      classes,
    } = this.props;

    switch(history.location.pathname){
      case '/':
        this.setState((prevState) => ({ ...prevState, pagenumber: 0 }));
        break;
      case '/categories':
        this.setState((prevState) => ({ ...prevState, pagenumber: 1 }));
        break;
      case '/about':
        this.setState((prevState) => ({ ...prevState, pagenumber: 2 }));
        break;
      case '/contact':
        this.setState((prevState) => ({ ...prevState, pagenumber: 3 }));
        break;
      default:
        this.setState((prevState) => ({ ...prevState, pagenumber: 4 }));
    }

    return (
      <div>
        <Paper className={classes.root}>
          <Tabs
            style={{ height: '58px' }}
            variant="fullWidth"
            value={this.state.pagenumber}
            centered
            indicatorColor="primary"
          >
            <Tab className={classes.menuTab} label="Inicio" onClick={()=>{history.push('/')}}/>
            <Tab className={classes.menuTab} label="Categorias" onClick={()=>{history.push('/categories')}}/>
            <Tab className={classes.menuTab} label="Sobre" onClick={()=>{history.push('/about')}}/>
            <Tab className={classes.menuTab} label="Contato" onClick={()=>{history.push('/contact')}}/>
          </Tabs>
        </Paper>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(NavBar)));
