import { useState } from 'react'

const SongForm = ({ albumId, onSongFormSubmit }) => {

  const [title, setTitle] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')


  const titleHandler =  e => setTitle(e.target.value);
  const minHandler =  e => setMin(e.target.value);
  const secHandler =  e => setSec(e.target.value);

  const formSubmitHandler = e => {
    // e.preventDefault();

    const songObj = {
      title,
      duration: `${min}:${sec}`,
      albumId: Number(albumId),
    }

    onSongFormSubmit(songObj)
  }

  return (
      <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='title'>Title:</label>
        <input type='text' name='title' id='title' value={title} onChange={titleHandler}/>
      </div>
      <div className='form-control'>
        <label htmlFor='min'>Duration: ({min}:{sec})</label>
        <input type='number' name='min' id='min' value={min} onChange={minHandler} />
        <label htmlFor='min'>minutes</label>
        <input type='number' name='sec' id='sec' value={sec} onChange={secHandler} />
        <label htmlFor='sec'>seconds</label>
      </div>

      <div className='form-control'>
        <button type='submit' name='submit' id='submit'>Save</button>
      </div>

      </form>
  )
}

export default SongForm