import clock from '../../images/duration_icon.svg'

const SongsBar = ({ inAlbum }) => {
  return (
    <div className='songs-grid-system banner'>
      <span>#</span>
      <span>Title</span>
      
      <span className='album-title'>
        {inAlbum ? '' : 'Album'}
      </span>

      <span className='song-length'>
        <img src={clock} alt='clock' width={'20px'} className='icon'/>
      </span>
    </div>
  )
}

export default SongsBar