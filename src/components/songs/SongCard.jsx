import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SongCard = ( { song } ) => {
  return (
    <ListItem style={{width: 400}}>
      <ListItemText key="id" primary={ song.title + " 🎵 "} secondary={ song.artist + " 🎤 " }/>
      <button> ❤️ {song.likes}</button>
    </ListItem>
  )
}

export default SongCard
