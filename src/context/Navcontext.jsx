import React, { createContext } from 'react'
export const NavbarContext = createContext()

const Navcontext = ({children}) => {
    const [navOpen, setNavOpen] = React.useState(false)
    return (
    <div>
      <NavbarContext.Provider value={{navOpen, setNavOpen}}>
        {children}
      </NavbarContext.Provider>
    </div>
  )
}

export default Navcontext
