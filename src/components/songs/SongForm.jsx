import React from 'react'

const SongForm = () => {
  return (
    <form>
            <label>
                Title:
                <input type="text" name="title" />
            </label>
            <label>
                Artist:
                <input type="text" name="artist" />
            </label>
            <input type="submit" name="submit" />
        </form>
  )
}

export default SongForm