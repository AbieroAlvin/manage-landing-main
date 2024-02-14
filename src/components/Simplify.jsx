import bgDesk from '../assets/images/bg-simplify-section-desktop.svg'
import bgMobile from '../assets/images/bg-simplify-section-mobile.svg'


const Simplify = () => {
  return (
    <div className="bg-orange-600 w-full mx-auto flex items-center justify-center relative overflow-hidden">
        <div className='flex w-full max-w-[1240px] items-center justify-between md:flex-row flex-col gap-8 py-12 md:px-6 px-4 z-50'>
            <div className="md:w-1/2 w-3/4"><h1 className="md:text-5xl text-4xl font-semibold text-white text-center md:text-left">Simplify how your team works today</h1></div>
            <div className=""><button className="rounded-full text-[15px] px-8 py-2.5 bg-white hover:bg-orange-600 hover:text-white text-orange-600 shadow-lg  ">Get Started</button></div>    
        </div>
        <div className='absolute z-20 top-[-2rem]'>
           <img src={bgDesk} alt="background desktop" className='hidden md:flex'/>
           <img src={bgMobile} alt="background mobile" className='flex md:hidden'/>
        </div>
    </div>
  )
}

export default Simplify