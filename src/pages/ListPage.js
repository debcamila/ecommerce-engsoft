import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginForm from '../components/Forms/Login';
import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';
import Footer from '../components/HomePageComponents/Footer';
import { withStyles } from '@material-ui/core';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const styles = () => ({
  rootPadding: {
    margin: '16px 0 15px 0',
  },
});

const listaDeProdutos = [

  {
    id: 5,
    images: [
      {
        id: 1,
        image_url: 'https://cdn.awsli.com.br/600x450/492/492729/produto/32850267/26cba2d95e.jpg',
        created_at: '2020-04-05T16:26:05.962531-03:00',
        updated_at: '2020-04-05T16:26:05.962648-03:00',
      },
    ],
    name: 'DorFlex',
    price: 35,
    categories: [
      {
        id: 1,
        name: 'XAROPE',
        created_at: '2020-04-03T01:01:54.306016-03:00',
        updated_at: '2020-04-03T01:01:54.306048-03:00',
      },
      {
        id: 2,
        name: 'PASTILHA',
        created_at: '2020-04-03T01:02:11.701019-03:00',
        updated_at: '2020-04-03T01:02:11.701046-03:00',
      },
    ],
  },

  {
    id: 6,
    name: 'Tylenol',
    price: 35,
    images: [
      {
        id: 2,
        image_url: 'https://uploads.consultaremedios.com.br/product_variation_images/full/65fc6fd4367f4c1dd36b525bec13176a4402349e.jpg?1583942107',
        created_at: '2020-04-05T16:26:05.962531-03:00',
        updated_at: '2020-04-05T16:26:05.962648-03:00',
      },
    ],

    categories: [
      {
        id: 1,
        name: 'XAROPE',
        created_at: '2020-04-03T01:01:54.306016-03:00',
        updated_at: '2020-04-03T01:01:54.306048-03:00',
      },
      {
        id: 2,
        name: 'PASTILHA',
        created_at: '2020-04-03T01:02:11.701019-03:00',
        updated_at: '2020-04-03T01:02:11.701046-03:00',
      },
    ],
  },

  {
    id: 78,
    name: 'Dipirona',
    price: 35,
    images: [
      {
        id: 3,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuRFnvcxWtzwSVfky4jraS5D9Fb9EYIXd3yG0xdKofAHFVymt&usqp=CAU.array.isRequired',
        created_at: '2020-04-05T16:26:05.962531-03:00',
        updated_at: '2020-04-05T16:26:05.962648-03:00',
      },
    ],
    categories: [
      {
        id: 1,
        name: 'XAROPE',
        created_at: '2020-04-03T01:01:54.306016-03:00',
        updated_at: '2020-04-03T01:01:54.306048-03:00',
      },
      {
        id: 2,
        name: 'PASTILHA',
        created_at: '2020-04-03T01:02:11.701019-03:00',
        updated_at: '2020-04-03T01:02:11.701046-03:00',
      },
    ],
  },

  {
    id: 99,
    name: 'Mascara',
    price: 35,
    images: [
      {
        id: 4,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3zYKBMsA4mKyfP9ZTbAswi-2TxP9efoNfj60yrOGQTK4Rgs1-&usqp=CAU',
        created_at: '2020-04-05T16:26:05.962531-03:00',
        updated_at: '2020-04-05T16:26:05.962648-03:00',
      },
    ],
    categories: [
      {
        id: 1,
        name: 'XAROPE',
        created_at: '2020-04-03T01:01:54.306016-03:00',
        updated_at: '2020-04-03T01:01:54.306048-03:00',
      },
      {
        id: 2,
        name: 'PASTILHA',
        created_at: '2020-04-03T01:02:11.701019-03:00',
        updated_at: '2020-04-03T01:02:11.701046-03:00',
      },
    ],
  },

  {
    id: 9,
    name: 'DorFlex',
    price: 35,
    images: [
      {
        id: 3,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuRFnvcxWtzwSVfky4jraS5D9Fb9EYIXd3yG0xdKofAHFVymt&usqp=CAU.array.isRequired',
        created_at: '2020-04-05T16:26:05.962531-03:00',
        updated_at: '2020-04-05T16:26:05.962648-03:00',
      },
    ],
    categories: [
      {
        id: 1,
        name: 'XAROPE',
        created_at: '2020-04-03T01:01:54.306016-03:00',
        updated_at: '2020-04-03T01:01:54.306048-03:00',
      },
      {
        id: 2,
        name: 'PASTILHA',
        created_at: '2020-04-03T01:02:11.701019-03:00',
        updated_at: '2020-04-03T01:02:11.701046-03:00',
      },
    ],
  },

  {
    id: 14,
    name: 'Tylenol',
    price: 35,
    images: [
      {
        id: 3,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuRFnvcxWtzwSVfky4jraS5D9Fb9EYIXd3yG0xdKofAHFVymt&usqp=CAU.array.isRequired',
        created_at: '2020-04-05T16:26:05.962531-03:00',
        updated_at: '2020-04-05T16:26:05.962648-03:00',
      },
    ],
    categories: [
      {
        id: 1,
        name: 'XAROPE',
        created_at: '2020-04-03T01:01:54.306016-03:00',
        updated_at: '2020-04-03T01:01:54.306048-03:00',
      },
      {
        id: 2,
        name: 'PASTILHA',
        created_at: '2020-04-03T01:02:11.701019-03:00',
        updated_at: '2020-04-03T01:02:11.701046-03:00',
      },
    ],
  },

  {
    id: 39,
    name: 'Dipirona',
    price: 35,
    images: [
      {
        id: 3,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuRFnvcxWtzwSVfky4jraS5D9Fb9EYIXd3yG0xdKofAHFVymt&usqp=CAU.array.isRequired',
        created_at: '2020-04-05T16:26:05.962531-03:00',
        updated_at: '2020-04-05T16:26:05.962648-03:00',
      },
    ],
    categories: [
      {
        id: 1,
        name: 'XAROPE',
        created_at: '2020-04-03T01:01:54.306016-03:00',
        updated_at: '2020-04-03T01:01:54.306048-03:00',
      },
      {
        id: 2,
        name: 'PASTILHA',
        created_at: '2020-04-03T01:02:11.701019-03:00',
        updated_at: '2020-04-03T01:02:11.701046-03:00',
      },
    ],
  },

  {
    id: 72,
    name: 'Mascara',
    price: 35,
    images: [
      {
        id: 3,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuRFnvcxWtzwSVfky4jraS5D9Fb9EYIXd3yG0xdKofAHFVymt&usqp=CAU.array.isRequired',
        created_at: '2020-04-05T16:26:05.962531-03:00',
        updated_at: '2020-04-05T16:26:05.962648-03:00',
      },
    ],
    categories: [
      {
        id: 1,
        name: 'XAROPE',
        created_at: '2020-04-03T01:01:54.306016-03:00',
        updated_at: '2020-04-03T01:01:54.306048-03:00',
      },
      {
        id: 2,
        name: 'PASTILHA',
        created_at: '2020-04-03T01:02:11.701019-03:00',
        updated_at: '2020-04-03T01:02:11.701046-03:00',
      },
    ],
  },
];

class ListPage extends PureComponent {
  render() {
    return (
      <>
        <div className="mainContent">
          <TopBar />
          <NavBar />
          <div className="container">
            <Grid container spacing={4} style={styles().rootPadding}>
              <Grid item xs={3}>
                <Paper elevation={3}>
                  Lista de categorias
                </Paper>
              </Grid>
              <Grid item xs={9}>
                Conteudo
              </Grid>
            </Grid>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = ({ info }) => ({
  info,
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(ListPage)));