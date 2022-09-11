import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LikeButton from './LikeButton';

const SongCard = ( { song } ) => {
  return (
    <ListItem style={{width: 400}}>
      <ListItemText key="id" primary={ song.title + " 🎵 "} secondary={ song.artist + " 🎤 " }/>
      <LikeButton song={song} />
    </ListItem>
  )
}

export default SongCard
