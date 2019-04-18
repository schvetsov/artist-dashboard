import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const Card = (props) => (
    <GridListTile 
        {...props}
        onClick={() => 
        props.handleChange(props.data.artistID, props.dispatch)}
    >
        <img src={props.data.imageURL} alt={""} />
        <GridListTileBar
            title={props.data.firstName + " " + props.data.lastName} 
            subtitle={props.data.art}
            actionIcon={
                <IconButton className={props.classes.icon}>
                    <InfoIcon />
                </IconButton>
            }
        />
    </GridListTile>
)

export default Card;
