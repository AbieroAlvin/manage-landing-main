
const About = () => {
  return (
    <div className="my-12 w-full mx-auto flex items-center justify-center">
        <div className='flex w-full max-w-[1240px] items-start justify-between md:flex-row flex-col md:px-6 px-4 gap-6 md:gap-12'>
          {/* first details */}
          <div className="md:text-left text-center">
            <h1 className="text-3xl font-bold md:text-4xl mb-3">What’s different about Manage?</h1>
            <p className="md:w-3/4">Manage provides all the functionality your team needs, without 
  the complexity. Our software is tailor-made for modern digital 
  product teams.</p>
          </div>
          {/* second details */}
          <div className="flex flex-col gap-6 md:text-left text-center md:pl-16">
               {/* detail */}
          <div className="px-2">
             {/* heading */}
             <div className="flex items-center md:gap-6 gap-4">
                <div className="bg-orange-400 text-white px-6 py-2 rounded-full flex items-center justify-center">01</div>
                <h1 className="font-bold text-xl">Track company-wide progress</h1>
             </div>
             {/* text */}
             <p className="md:px-24 px-2 md:mt-0 mt-2">See how your day-to-day tasks fit into the wider vision. Go from 
  tracking progress at the milestone level all the way done to the 
  smallest of details. Never lose sight of the bigger picture again.</p>
          </div>
          {/* detail */}
          <div className="px-2">
             {/* heading */}
             <div className="flex items-center md:gap-6 gap-4">
                <div className="bg-orange-400 text-white px-6 py-2 rounded-full flex items-center justify-center">02</div>
                <h1 className="font-bold text-xl">Advanced built-in reports</h1>
             </div>
             {/* text */}
             <p className="md:px-24 px-2 md:mt-0 mt-2">Set internal delivery estimates and track progress toward company 
  goals. Our customisable dashboard helps you build out the reports 
  you need to keep key stakeholders informed.</p>
          </div>
          {/* detail */}
          <div className="px-2">
             {/* heading */}
             <div className="flex items-center md:gap-6 gap-4">
                <div className="bg-orange-400 text-white px-6 py-2 rounded-full flex items-center justify-center">03</div>
                <h1 className="font-bold text-xl">Everything you need in one place</h1>
             </div>
             {/* text */}
             <p className="md:px-24 px-2 md:mt-0 mt-2">Stop jumping from one service to another to communicate, store files, 
  track tasks and share documents. Manage offers an all-in-one team 
  productivity solution.</p>
          </div>
          </div>
           
         
        </div>
    </div>
  )
}

export default About