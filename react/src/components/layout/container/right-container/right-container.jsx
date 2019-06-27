import React, { Component } from 'react';
import './right-container.css';
import ImageIcon from "@material-ui/icons/Image";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
    Grid,
    CardHeader,
    Avatar,
    IconButton,
    CardContent
  } from "@material-ui/core";

export default class RightContainerComponent extends Component {
    render(){
        return (
            <Grid className="heightAdjust" item xs={9}>
                <CardHeader
                avatar={
                    <Avatar aria-label="Recipe">
                    <ImageIcon />
                    </Avatar>
                }
                action={
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                }
                title="Chat Room 1"
                />
                <CardContent className="content" />
            </Grid>
        )
    }
}