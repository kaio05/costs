import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container customClass='min_height'>
          <Routes>
            <Route path='costs/' element={<Home />} />
            <Route path='costs/company' element={<Company />} />
            <Route path='costs/projects' element={<Projects />} />
            <Route path='costs/contact' element={<Contact />} />
            <Route path='costs/newproject' element={<NewProject />} />
            <Route path='costs/project/:id' element={<Project />} />
          </Routes>
        </Container>
      </Router>
      <Footer />
    </div>
  );
}

export default App;