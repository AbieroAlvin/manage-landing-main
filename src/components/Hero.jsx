import illustration from '../assets/images/illustration-intro.svg'

const Hero = () => {
  return (
    <div className="my-12 w-full mx-auto flex items-center justify-center">
        <div className='flex w-full max-w-[1240px] items-center justify-between md:flex-row flex-col-reverse md:px-6 px-4'>
            {/* details */}
        <div className='md:pr-12 p-5 md:w-1/2 flex flex-col gap-4 md:gap-6 md:text-left text-center md:items-start items-center'>
            <h1 className='md:text-5xl text-3xl font-bold' >Bring everyone together to build better products.</h1>
            <p className='md:w-3/4'>Manage makes it simple for software teams to plan day-to-day 

  tasks while keeping the larger team goals in view.</p>
  <button className="rounded-full text-[15px] px-8 py-2.5 text-white bg-orange-600 shadow-lg md:w-1/2 w-1/2">Get Started</button>
        </div>
     {/* images */}
     <div className='md:py-8 p-6'>
        <img src={illustration} alt="illustration intro image" />
     </div>
        </div>
        
    </div>
  )
}

export default Hero