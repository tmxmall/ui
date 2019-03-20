import React from 'react'

const Home: React.FC = (): React.ReactElement<HTMLDivElement> => <div>Home Page</div>

Home.defaultProps = {
  isUserLoggedIn: false,
}

export default Home
