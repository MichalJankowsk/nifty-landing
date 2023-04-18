import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Button from 'components/button'
import Modal from 'components/modal'

import Logo from 'assets/svg/logo.svg'
import HamburgerIcon from 'assets/svg/hamburger.svg'
import CrossIcon from 'assets/svg/cross.svg'

import stl from './Header.module.scss'

const Header = ({ customClass }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = ['Home', 'Roadmap', 'Discover', 'Community']

  return (
    <header className={clsx(stl.header, customClass)}>
      <div>
        <Logo />
      </div>

      <div className={stl.navLinks}>
        {navLinks.map(label => (
          <Button key={label} label={label} link="/" />
        ))}
      </div>

      <div className={stl.navBtns}>
        <Button label="Contact" variant="secondary" />
        <Button label="My account" />
        <HamburgerIcon
          className={stl.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        customClass={stl.modal}
        blur
      >
        <div className={stl.mobileNav}>
          <CrossIcon onClick={() => setIsOpen(false)} />

          <div className={stl.navLinksMob}>
            {navLinks.map(label => (
              <Button key={label} label={label} link="/" />
            ))}
          </div>

          <div className={stl.navBtnsMob}>
            <Button label="Contact" variant="secondary" />
            <Button label="My account" />
          </div>
        </div>
      </Modal>
    </header>
  )
}

Header.propTypes = {
  customClass: PropTypes.string,
}

export default Header
