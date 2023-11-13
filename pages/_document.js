import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
