import { useEffect, useState } from 'react'

const ArtistForm = ({ onArtistFormSubmit, initialData }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [imgUrl, setImgUrl] = useState('https://via.placeholder.com/150/112233')

  const nameHandler =  e => setName(e.target.value);
  const descriptionHandler =  e => setDescription(e.target.value);
  const imgUrlHandler =  e => setImgUrl(e.target.value);

  useEffect(() => {
    if(initialData) {
      setName(initialData.name)
      setDescription(initialData.description)
      setImgUrl(initialData.picture.imgUrl)
    }
  }, [initialData])

  const formSubmitHandler = e => {
    e.preventDefault();



    const artistObj = {
      name,
      description,
      picture: {
        imgUrl
      }
    }

    onArtistFormSubmit(artistObj)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={nameHandler} required/>
      </div>

      <div className="form-control">
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows="5" cols="50" value={description} onChange={descriptionHandler} required/>
      </div>

      <div className="form-control">
        <label htmlFor="photo">Photo URL:</label>
        <input type="url" id="photo" name="photo" value={imgUrl} onChange={imgUrlHandler}/>
      </div>

      <button type='submit'>
        {initialData ? 'Edit Artist' : 'Add Artist'}
      </button>
    </form>
)
}

export default ArtistForm