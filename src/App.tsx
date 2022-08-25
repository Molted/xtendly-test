import Floqast from './assets/Floqast-image.png'
import shape from './assets/Shape_68.png'

// sm (576px)	min-width: 576px;
// md (768px)	min-width: 768px;
// lg (1024px)	min-width: 1024px;
// xl (1280px)	min-width: 1280px;
// 2xl (1440px)	min-width: 1440px;

function App() {
  return (
    <div className="h-full w-full flex flex-col justify-evenly lg:justify-between" id='Container'>
      {/* FLOQAST */}
      <div className="flex justify-center gradient-white w-full md:w-[60%] items-center md:items-start my-5 lg:my-0 py-8">
        <h1 className='text-xl md:text-2xl lg:text-3xl text-[#3f3f3f] italic font-medium'>
          <span className="inline-block w-32 md:w-44 lg:w-64">
            <img className="" src={Floqast} alt="Floqast Logo" />
          </span>
          The <br />
            <span className='text-[#8BC540] font-semibold text-[1.6rem] md:text-4xl lg:text-5xl'>
            Fastest, Most Accurate <br />
            </span>
          Way to Close Your Books
        </h1>
      </div>
      
      {/* FORM */}
      <div className='mx-auto my-5 lg:my-0 xl:w-auto max-w-[100%] lg:flex grid grid-cols-1 lg:grid-cols-[30%_1fr] bg-white'>
        {/* SCHEDULE A DEMO - DESKTOP VIEW */}
        <div className="text-white desktop-only lg:flex flex-col justify-center items-center relative p-6">
          <span className='absolute inset-0'>
            <img className="min-h-full max-h-full w-full" src={shape} alt=""/>
          </span>
          <div className='z-10 text-center'>
            <h5 className="uppercase font-bold text-[28px]">
              Schedule A Demo
            </h5>
            <h6 className='text-lg font-normal'>
              Learn More About Floqast.
            </h6>          
          </div>
        </div>
        {/* END OF SCHEDULE A DEMO */}
        {/* SCHEDULE A DEMO - TABLET & MOBILE VIEW */}
        <div className="bg-[#8BC540] text-white lg:hidden flex flex-col justify-center items-center p-2">
          <div className='text-center'>
            <h5 className="uppercase font-bold text-[18px] md:text-[20px] lg:text-[28px]">
              Schedule A Demo
            </h5>
            <h6 className='text-sm md:text-md font-normal'>
              Learn More About Floqast.
            </h6>          
          </div>
        </div>
        {/* END OF SCHEDULE A DEMO - TABLET & MOBILE VIEW */}

        {/* LEARN HOW FLOQAST */}
        <div className='flex flex-col justify-center lg:my-0 lg:text-center p-2 pt-0 lg:p-4'>
          {/* DESKTOP VIEW */}
          <p className="desktop-only font-bold text-2xl capitalize text-[#6d6e70] p-2">
            learn how floqast can <span className='text-[#8BC540]'>improve your month-end</span>
          </p>
          {/* TABLET - MOBILE VIEW */}
          <p className="lg:hidden font-bold text-lg capitalize text-center text-[#6d6e70] p-2">
            learn how floqast can <span className='text-[#8BC540]'><br /> improve your month-end</span>
          </p>
          {/* END OF TABLET - MOBILE VIEW */}
          <div className='grid lg:grid-cols-3 gap-3 my-2 px-5 pb-2 lg:my-0 lg:p-0'>
            <input type="text" placeholder='First Name*' className='border-solid border-[1px] border-gray-200 p-2'/>
            <input type="email" placeholder='Email*' className='border-solid border-[1px] border-gray-200 p-2'/>
            <button className='text-white uppercase p-2 text-sm font-medium bg-[#8bc540] border-solid border-[2px] border-[#6f973b]'>schedule now</button>
          </div>
        </div>
        {/* END OF LEARN HOW FLOQAST */}

      </div>
    </div>
  );
}

export default App;
