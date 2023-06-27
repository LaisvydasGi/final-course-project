import { useEffect, useState } from 'react'

const SongForm = ({ albumId, onSongFormSubmit, initialData }) => {

  const [title, setTitle] = useState('')
  const [min, setMin] = useState('min')
  const [sec, setSec] = useState('sec')


  const titleHandler =  e => setTitle(e.target.value);
  const minHandler =  e => setMin(e.target.value);
  const secHandler =  e => setSec(e.target.value);

  useEffect(() => {
    if(initialData) {
      setTitle(initialData.title)
      setMin(initialData.duration.split(':')[0])
      setSec(initialData.duration.split(':')[1])
    }
  }, [initialData])

  const formSubmitHandler = e => {
    e.preventDefault();

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
          <label htmlFor='title'>Song title:</label>
          <input type='text' name='title' id='title' value={title} onChange={titleHandler} required/>
        </div>
        <div className='form-control duration'>
          <label htmlFor='min'>Song length: ({min}:{sec})</label>
          <input type='number' name='min' id='min' min="0" max="20" value={min} onChange={minHandler} required/>
          <label htmlFor='min'>min</label>
          <input type='number' name='sec' id='sec' min="0" max="59" value={sec} onChange={secHandler} required/>
          <label htmlFor='sec'>sec</label>
        </div>

        <div className='form-control'>
          <button type='submit' name='submit' id='submit'>Save</button>
        </div>
      </form>
  )
}

export default SongForm