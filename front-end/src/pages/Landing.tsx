import { Link } from "react-router-dom"
import Logo from "../components/Logo"

function Landing() {
  return (
    <div className='w-[85%] h-[100dvh] m-auto flex space-x-5 py-5 overflow-auto'>
      {/* left part */}
      <div className='w-full lg:w-[50%]'>
        <Logo container='w-[100px] md:w-[150px]' />
        <div>
          <h1 className='text-2xl lg:text-5xl font-bold text-[#05156D] mt-10'>
            Fruit <span className='text-cyan-500 capitalize'>Of The</span> Vine
          </h1>

          <p className='mt-5 text-slate-700 leading-7 text-sm md:text-base lg:leading-8'>
            A ministry-affiliated mini-mart offering high-quality provisions to
            the community, blending spiritual mission with practical service.
            <p className='mt-5'>
              Our Vision is to be a community beacon, delivering quality and
              service that nourishes both body and spirit, reflecting our
              ministry's values
            </p>
            <p className='mt-5'>
              Our Mission is to provide esssential goods in a welcoming,
              spiritually enriching environment, serving our community with
              integrity and compassion.
            </p>
          </p>
          <div className='mt-10'>
            <Link
              to='/register'
              className='bg-[#05156D] py-2 px-4 rounded text-white text-lg mr-4 hover:bg-cyan-800 ease-in-out duration-300'
            >
              Create Account
            </Link>
            <Link
              to='/login'
              className='bg-[#05156D] py-2 px-4 rounded text-white text-lg hover:bg-cyan-800 ease-in-out duration-300'
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* right part */}
      <div className='hidden lg:block w-[50%]'>
        <div className='w-full m-auto mt-40 rounded-md overflow-hidden shadow-lg'>
          {/* <img src='/landing_img.svg' alt='' /> */}
          <img
            src='https://i.pinimg.com/564x/7b/d4/66/7bd46623d484c73fdbd198e4c85968e5.jpg'
            alt=''
            className='w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
