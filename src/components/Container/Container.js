function Container({ children, classes }) {

  return (
    <div className={`container ${classes ? classes: ''}`}>
      {children}
    </div>
  )
}

export default Container;