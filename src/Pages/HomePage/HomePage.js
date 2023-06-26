import Container from "../../components/Container/Container"
import logo from "../../components/MainHeader/logo.svg"

const HomePage = () => {
  return (
    <Container>
       <div className="index-wrapper">
        <h1>Final Project</h1>
        <h3>Front-end Serverless Course</h3>
        <img src={logo} alt="logo" width="200px"/>
      </div>
    </Container>
    
  )
}

export default HomePage