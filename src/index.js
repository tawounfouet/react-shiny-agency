import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/'
import Survey from './pages/Survey/'
import Results from './pages/Results'
import Freelances from './pages/Freelances'


import Header from './components/Header'
import Error from './components/Error'
import FreelanceForm from './components/FreelanceForm'
// On ajoute nos composants
import ClientForm from './components/ClientForm'
// import FreelanceForm from './components/FreelanceForm'
// import { createGlobalStyle } from 'styled-components'
import GlobalStyle from './utils/style/GlobalStyle'

// import { ThemeProvider } from './utils/context'
import { ThemeProvider, SurveyProvider } from './utils/context'
import Footer from './components/Footer'

// const GlobalStyle = createGlobalStyle`
//     * {
//       font-family: 'Trebuchet MS', Helvetica, sans-serif;
//     }

//     body {
//       margin: 0;
//     }
// `

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/survey" element={<Survey />} /> */}
            <Route path="/survey/:questionNumber" element={<Survey />} />
            { /* Nous imbriquons nos composants dans survey */}
              <Route path="client" element={<ClientForm />} />
              <Route path="freelance" element={<FreelanceForm />} />
              <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
