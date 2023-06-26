import logo from './linkedin_icon.svg';
import Container from "../Container/Container"

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <Container classes="footer-container">
        <div>
          <span>
            <a href="https://www.linkedin.com/in/laisvydas-g-39a25410b/" >
              <img src={logo} alt='linkedin icon' width='40rem'/>
            </a>
          </span>
        </div>
        <div>
          <span>Copyright © Laisvydas Giriūnas</span>
        </div>
      </Container>
    </footer>
  )
}

export default MainFooter