import Container from "../../components/Container/Container"
import logo from '../../images/logo.svg'

const HomePage = () => {
  return (
    <Container>
       <div className="index-wrapper">
        <h1>Final Project</h1>
        <h3>Front-end Serverless</h3>
        <img src={logo} alt="logo" width="200px" className="icon"/>
        
      </div>
    </Container>
    
  )
}

export default HomePage