import { useEffect, useState } from 'react'

const AlbumForm = ({ artistId, onAlbumFormSubmit, initialData }) => {
  const [title, setTitle] = useState('')
  const [imgUrl, setImgUrl] = useState('https://via.placeholder.com/150/771722')
  const [releaseDate, setReleaseDate] = useState('')

  const titleHandler =  e => setTitle(e.target.value);
  const imgUrlHandler =  e => setImgUrl(e.target.value);
  const releaseDateHandler =  e => setReleaseDate(e.target.value);

  useEffect(() => {
    if(initialData) {
      setTitle(initialData.title)
      setImgUrl(initialData.imgUrl)
      setReleaseDate(initialData.released)
    }
  }, [initialData])


  const formSubmitHandler = e => {
    e.preventDefault();

    const albumObj = {
      title,
      artistId: Number(artistId),
      imgUrl,
      released: releaseDate
    }

    onAlbumFormSubmit(albumObj)
  }

  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="title">Album title:</label>
        <input type="text" id="title" name="title" value={title} onChange={titleHandler} required/>
      </div>

      <div className="form-control">
        <label htmlFor="title">Album cover image URL:</label>
        <input type="url" placeholder="https://via.placeholder.com/150/771722" id="title" name="title" value={imgUrl} onChange={imgUrlHandler}/>
      </div>

      <div className='form-control duration'>
        <label htmlFor='release-date'>Release date:</label>
        <input type='date' name='release-date' id='release-date' value={releaseDate} onChange={releaseDateHandler} required/>
      </div>

      <button type='submit'>
        {initialData ? 'Save' : 'Create'}
      </button>
    </form>
)
}

export default AlbumForm