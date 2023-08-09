import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <span>
          <img src={logo} alt="logotipo" />
        </span>
        <nav>
          <NavLink to="/" title="Timer">
            <Timer size={20} />
          </NavLink>
          <NavLink to="/history" title="History">
            <Scroll size={20} />
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  )
}

export default Header
