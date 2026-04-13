// ─────────────────────────────────────────────────────────────
// App.jsx — Root router with AnimatePresence for page transitions
// ─────────────────────────────────────────────────────────────
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

import Navbar  from './components/Navbar'
import Footer  from './components/Footer'

import Home         from './pages/Home'
import About        from './pages/About'
import Services     from './pages/Services'
import Gallery      from './pages/Gallery'
import Pricing      from './pages/Pricing'
import Booking      from './pages/Booking'
import Contact      from './pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/services"     element={<Services />} />
        <Route path="/gallery"      element={<Gallery />} />
        <Route path="/pricing"      element={<Pricing />} />
        <Route path="/booking"      element={<Booking />} />
        <Route path="/contact"      element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: { fontFamily: '"DM Sans", sans-serif', borderRadius: '12px' },
        }}
      />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
