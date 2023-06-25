import { useEffect, useState } from 'react'

const ArtistForm = ({ onArtistFormSubmit, initialData }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const nameHandler =  e => setName(e.target.value);
  const descriptionHandler =  e => setDescription(e.target.value);

  useEffect(() => {
    if(initialData) {
      setName(initialData.name)
      setDescription(initialData.description)
    }
  }, [initialData])

  const formSubmitHandler = e => {
    e.preventDefault();

    const artistObj = {
      name,
      description
    }

    onArtistFormSubmit(artistObj)
  }

  return (
    <form onSubmit={formSubmitHandler} noValidate>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={nameHandler}/>
      </div>

      <div className="form-control">
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows="5" cols="50" value={description} onChange={descriptionHandler}/>
      </div>

      <button type='submit'>
        {initialData ? 'Edit User' : 'Create User'}
      </button>
    </form>
)
}

export default ArtistForm