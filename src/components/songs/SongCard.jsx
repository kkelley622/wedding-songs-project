import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SongCard = ( { song } ) => {
  return (
    <ListItem button>
      <ListItemText primary={ song.title } secondary={ song.artist }/>
    </ListItem>
  )
}

export default SongCard