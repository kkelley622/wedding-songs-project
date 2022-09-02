import { ReceiptRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import React from 'react';
import SongCard from './SongCard';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  

const WantedSongs = ( { songs } ) => {
    const classes = useStyles();

    const songCards = songs.map(song => <SongCard key={ song.id } song={ song }/>)
  return (
    <div>
        <h1>Songs we want to dance to</h1>
        <List component="nav" aria-label="secondary mailbox folders">
            { songCards }
      </List>
    </div>
  )
}

export default WantedSongs