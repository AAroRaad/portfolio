import {createContext} from 'react'

export default createContext({
    pageNumber:0,
    handlePageNumber:() => {},
    DrawerOpen: false,
    setDrawerOpen: () => {},
    handleThemeChange: () => {}
})