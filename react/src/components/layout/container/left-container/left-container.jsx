import React, { Component } from 'react';
import './left-container.css';
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import {
  Paper,
  Typography,
  Grid,
  CardHeader,
  Avatar,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const list = [
    { id: 1, name: "Marco", text: "Lorem ipsum", image: <ImageIcon /> },
    { id: 2, name: "Douglas", text: "Lorem ipsum", image: <WorkIcon /> },
    { id: 3, name: "Leo", text: "Lorem ipsum", image: <BeachAccessIcon /> }
];

export default class LeftContainerComponent extends Component {

    render(){
        return (
            <Grid item xs={3}>
                <CardHeader
                className="cardHeader"
                avatar={
                    <Avatar aria-label="Recipe">
                    H
                    </Avatar>
                }
                />
                <Paper className="paper" elevation={0}>
                <Typography className="information">
                    Seu acesso está ativo
                </Typography>
                </Paper>
                <List>
                {list.map(item => (
                    <ListItem key={item.name}>
                        <Avatar>{item.image}</Avatar>
                        <ListItemText primary={item.name} secondary={item.text} />
                    </ListItem>
                ))}
                </List>
            </Grid>
        )
    }

}