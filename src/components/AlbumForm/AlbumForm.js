import { useEffect, useState } from 'react'

const AlbumForm = ({ artistId, onAlbumFormSubmit, initialData }) => {
  const [title, setTitle] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [releaseDate, setReleaseDate] = useState('')

  const titleHandler =  e => setTitle(e.target.value);
  const imgUrlHandler =  e => setImgUrl(e.target.value);
  const releaseDateHandler =  e => setReleaseDate(e.target.value);

  // useEffect(() => {
  //   if(initialData) {
  //     setTitle(initialData.title)
  //     (initialData.description)
  //   }
  // }, [initialData])


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
    <form onSubmit={formSubmitHandler} noValidate>
      <div className="form-control">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={titleHandler}/>
      </div>

      <div className="form-control">
        <label htmlFor="title">Cover Image URL:</label>
        <input type="url" placeholder="https://example.com" id="title" name="title" value={imgUrl} onChange={imgUrlHandler}/>
      </div>

      <div className='form-control'>
        <label htmlFor='task-due-date'>Release date:</label>
        <input type='date' name='task-due-date' id='task-due-date' value={releaseDate} onChange={releaseDateHandler}/>
      </div>

      <button type='submit'>
        {initialData ? 'Edit Album' : 'Create Album'}
      </button>
    </form>
)
}

export default AlbumForm