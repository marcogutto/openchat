import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    Grid,
    Card
  } from "@material-ui/core";
import LeftContainer from './components/layout/container/left-container/left-container';
import RightContainer from './components/layout/container/right-container/right-container';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    
    <Grid container>
        <Grid item xs={12}>
            <Card className="fullContainer">
                <Grid container>
                    <LeftContainer />
                    <RightContainer />
                </Grid>
            </Card>
        </Grid>
    </Grid>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
