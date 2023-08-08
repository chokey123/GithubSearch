import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'
import Alert from './components/layout/Alert'
import User from './pages/User'

function App() {
  return (
    <AlertProvider>
      <GithubProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/users/:login" element={<User />}></Route>
                <Route path="/notfound" element={<Notfound />}></Route>
                <Route path="/*" element={<Notfound />}></Route>
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </GithubProvider>
    </AlertProvider>
  )
}

export default App
