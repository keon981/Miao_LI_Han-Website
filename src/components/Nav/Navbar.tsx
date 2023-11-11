import { Button } from '@mui/base'
import { LogoNameBlack } from 'src/assets'

function Navbar() {
  return (
    <nav className="nav sticky">
      <Button href="/"> <LogoNameBlack /></Button>
    </nav>
  )
}

export default Navbar
