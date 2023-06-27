import clock from './duration_icon.svg'

const SongsBar = ({ inAlbum }) => {
  return (
    <div className='songs-grid-system banner'>
      <span>#</span>
      <span>Title</span>
      
      <span>
        {inAlbum ? '' : 'Album'}
      </span>

      <span className='song-length'>
        <img src={clock} alt='clock' width={'20px'} />
      </span>
    </div>
  )
}

export default SongsBar