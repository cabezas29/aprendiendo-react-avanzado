import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'
import { PhotoCard } from './components/PhotoCard/index'

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
    <PhotoCard />
  </div>
)
