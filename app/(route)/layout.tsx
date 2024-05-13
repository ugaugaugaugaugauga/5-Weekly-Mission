import { Footer } from './_components/footer'
import { Navbar } from './_components/navbar'

type Props = {
  children: React.ReactNode
}
const RouteLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default RouteLayout
