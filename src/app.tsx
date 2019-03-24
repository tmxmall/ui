import React from 'react'
import { Route, Switch } from 'react-router'

import Header from './components/patterns/Header'
import Footer from './components/patterns/Footer'
import NotFound from './components/patterns/NotFound'

import Home from './pages/Home'

const App: React.FC = () => (
  <>
    <Header />
    {/* <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route component={NotFound} />
    </Switch>
    <Footer /> */}
    <Footer />
  </>
)

export default App
