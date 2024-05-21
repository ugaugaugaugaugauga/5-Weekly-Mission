import { Footer } from './_components/footer'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center bg-slate-100'>
      {children}
      <Footer />
    </main>
  )
}

export default AuthLayout
