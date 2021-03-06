import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { AZUL_CLARO } from '../../../utils/colors';
import { AZUL_ESCURO } from '../../../utils/colors';
import { FaWhatsapp,FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import {
  withStyles, Link,
} from '@material-ui/core';

const styles = () => ({
  container: {
    flexGrow: 1,
    padding: '16px 0',
    backgroundColor:  AZUL_CLARO,
  },
  texto: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  main_text: {
    fontWeight: 900,
    textTransform: 'uppercase',
    fontSize: '25px',
    color: AZUL_ESCURO,
    marginBottom: '8px',
  },
  secundary_text: {
    fontWeight: 400,
  },
  social_midia_icons: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  social_midia_icon: {
    margin: '0 12px 0 12px ',
    background: '#FFFFFF',
    borderRadius: '20px',
    padding: '10px 10px 8px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export class SocialMedia extends PureComponent {
  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.container}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <div className={classes.texto}>
              <div className={classes.main_text}>Redes Sociais</div>
              <div className={classes.secundary_text}>
                {' '}
                Visite todas as nossas redes
                <br />
                e descubra o que tem de melhor nelas
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div className={classes.social_midia_icons}>
              <div className={classes.social_midia_icon}>
                <Link
                  href="https://www.facebook.com/Against-105778624419451"
                  target="_blank"
                  rel="noopener"
                >
                  <FaFacebookF size={28} color="#3b5998" />
                </Link>
              </div>

              <div className={classes.social_midia_icon}>
                <Link
                  href="https://www.instagram.com/against_covid_19/?hl=pt-br"
                  target="_blank"
                  rel="noopener"
                >
                  <FaInstagram size={28} color="#C13584" />
                </Link>
              </div>

              <div className={classes.social_midia_icon}>
                <Link
                  href="https://twitter.com/Against01676444"
                  target="_blank"
                  rel="noopener"
                >
                  <FaTwitter size={28} color="#1DA1F2" style={{ paddingTop: '2px' }} />
                </Link>
              </div>

              <div className={classes.social_midia_icon}>
                <Link
                  href="https://wa.me/5581998382336"
                  target="_blank"
                  rel="noopener"
                >
                  <FaWhatsapp size={28} color="#4AC959" />
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SocialMedia.propTypes = {
  classes: PropTypes.object.isRequired,
};

SocialMedia.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(SocialMedia)));
