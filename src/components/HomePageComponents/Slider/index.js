import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const styles = {

    root: {
        color: '#2c719c',
        '&$checked': {
            color: '#2c719c',
        },
    },
    checked: {},

    container: {
        position: 'relative',
        width: '100%',
        height: '300px',
        display: 'flex',
        justifyContent: 'space-around',
    },


    buttonLeft: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        right: '100px',
        bottom: '30px',
    },

    buttonRight: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        left: '100px',
        bottom: '30px',
    },

    button: {
        padding: '0px',
        backgroundColor: '#2C719C',
        transition: 'opacity 0.4s',
        '&:hover': {
            opacity: 0.8,
            backgroundColor: '#2C719C',
        },
    },

    icon: {
        color: 'white',
        fontSize: 40,
    },

    imagem: {
        position: 'absolute',
        width: '100%',
        height: '300px',
    },

    bolinhas: {
        bottom: '10px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: '40px',
    },
};


let timer = null;

class Slider extends PureComponent {

    state = {

        currentImageValue: 'https://http2.mlstatic.com/kit-emagrecedor-2-remedio-desodalina-colageno-vitamina-c-D_NQ_NP_646272-MLB31670921915_082019-F.jpg',

        slide:
            [
                {
                    imagem: 'https://http2.mlstatic.com/kit-emagrecedor-2-remedio-desodalina-colageno-vitamina-c-D_NQ_NP_646272-MLB31670921915_082019-F.jpg',
                    link: '/',
                    id: 1,
                },

                {
                    imagem: 'https://img.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg?size=626&ext=jpg',
                    link: '/social',
                    id: 2,
                },

                {
                    imagem: 'https://bisturi.com.br/12262-large_default/coperalcool-alcool-gel-400g.jpg',
                    link: '/login',
                    id: 3,
                }
            ],

        imagemAtual: 0,
    };


    stopAutoPlay = (event) => {


        const valor = event.target.value   // Pegar a imagem que a bolinha selecionada possui

        this.state.slide.map((slide, index) => { // Ver qual bolinha foi selecionada
            
            if (valor === slide.imagem) {

                this.setState({             // Mudar a imagem 

                    currentImageValue: valor,
                    imagemAtual: index,
                });
            }
        });

        clearInterval(timer);                // Parar o autoPLay
        timer = 2                           
    };


    forwardImage = (() => {


        if (this.state.imagemAtual !== this.state.slide.length - 1) {

            this.setState({

                imagemAtual: this.state.imagemAtual + 1,
                currentImageValue: this.state.slide[this.state.imagemAtual + 1].imagem
            });

        } else {

            this.setState({

                imagemAtual: 0,
                currentImageValue: this.state.slide[0].imagem
            });
        }

    })

    backImage = (() => {


        if (this.state.imagemAtual !== 0) {

            this.setState({

                imagemAtual: this.state.imagemAtual - 1,
                currentImageValue: this.state.slide[this.state.imagemAtual - 1].imagem
            });

        } else {

            const tamMaximo = this.state.slide.length;

            this.setState({

                imagemAtual: tamMaximo - 1,
                currentImageValue: this.state.slide[tamMaximo - 1].imagem
            });
        }
    })

    autoPlay = (() => {

        if (timer === null) {

            timer = setInterval(() => this.forwardImage(), 6000);
        }
    })


    reStartAutoPlay = (() => {  /* Ver quando parar o auto play */

        if (timer !== null) {

            clearInterval(timer);
        }
        timer = null;
    })


    render() {

        const { classes } = this.props;

        return (

            <div className={classes.container}>

                <Link
                    className={classes.imagem}
                    to={this.state.slide[this.state.imagemAtual].link}
                >
                    <img
                        className={classes.imagem}
                        src={this.state.currentImageValue}
                    />
                </Link>

                <div className={classes.buttonLeft}>
                    <IconButton
                        className={classes.button}
                        aria-label="Arrow Left"                        
                        onClick={() => (this.backImage(), this.reStartAutoPlay())}                      
                    >

                        <ChevronLeftIcon
                            className={classes.icon}
                            fontSize='inherit'                           
                        />


                    </IconButton>
                </div>


                <div className={classes.bolinhas}>

                    {
                        this.state.slide.map((slide) => (

                            <Radio
                                key={slide.id}
                                checked={this.state.currentImageValue === slide.imagem}
                                onChange={this.stopAutoPlay}
                                value={slide.imagem}
                                name={`${slide.id}`}
                                classes={{
                                    root: classes.root,
                                    checked: classes.checked,
                                }}
                            />
                        ))
                    }

                </div>

                <div className={classes.buttonRight}  >
                    <IconButton
                        className={classes.button}
                        aria-label="Arrow Right"                       
                        onClick={() => (this.forwardImage(), this.reStartAutoPlay())}
                    >
                        <ChevronRightIcon
                            className={classes.icon}
                            fontSize='inherit'                            
                        />

                    </IconButton>
                </div>


                {this.autoPlay()}

            </div>
        );
    }
}
Slider.propTypes = {

    classes: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(Slider)));
