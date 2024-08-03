
import { StarsCanvas, Navbar, About, Contact, Footer} from './components';

function App() {
  

  return (
    <>
    <div className='bg-black absolute z-[-1] overflow-x-hidden w-full h-full'>
      <div className="bg-gray-900 bg-gradient-to-b bg-opacity-25 text-white ">
        <Navbar />
      </div>

      <div className="text-white pt-5">
        <About />
      </div>

      <div className='bg-black absolute z-[-1] w-full h-full'>
        <StarsCanvas />
        <Contact />
      </div>
      <div className= 'abosulte sm:mt-[50%] mt-[200%]'>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
