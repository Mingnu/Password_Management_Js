import { useState } from 'react'
import Header from './components/Header/index.jsx'
import { SearchBar } from './components/search/SearchBar.jsx'
import PasswordCard from './components/passwords/index.jsx'
function App() {


  return (
    <>
      <Header />
      <SearchBar />
      <PasswordCard />
    </>
  )
}

export default App
