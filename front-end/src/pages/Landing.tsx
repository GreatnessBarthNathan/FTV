import { Link } from "react-router-dom"
import Logo from "../components/Logo"

function Landing() {
  return (
    <main className='bg-[var(--bgColor)] w-full h-screen overflow-auto'>
      <div className='w-[85%] m-auto flex space-x-5 py-5 overflow-auto'>
        {/* left part */}
        <div className='w-full lg:w-[50%]'>
          <div className='flex items-center justify-between space-x-5'>
            <Logo container='w-[100px] md:w-[150px]' />
            <div className='w-[80%]'>
              <img src='/Vector-3.png' className='w-full' />
            </div>
          </div>
          <div>
            {/* SMALL SCREEN IMAGE */}
            <div className='md:hidden w-full m-auto mt-3 rounded-md overflow-hidden shadow-lg'>
              <img
                src='https://i.pinimg.com/564x/7b/d4/66/7bd46623d484c73fdbd198e4c85968e5.jpg'
                alt=''
                className='w-full'
              />
            </div>
            <div className='mt-5 text-[var(--textSecondary)] leading-7 text-sm md:text-base lg:leading-5'>
              <span className='block text-[var(--primary)] font-bold'>
                ABOUT US
              </span>
              A ministry-affiliated mini-mart offering high-quality provisions
              to the community, blending spiritual mission with practical
              service.
              <p className='mt-5'>
                <span className='block text-[var(--primary)] font-bold'>
                  VISION
                </span>
                Our Vision is to be a community beacon, delivering quality and
                service that nourishes both body and spirit, reflecting our
                ministry's values.
              </p>
              <p className='mt-5'>
                <span className='block text-[var(--primary)] font-bold'>
                  MISSION
                </span>
                Our Mission is to provide esssential goods in a welcoming,
                spiritually enriching environment, serving our community with
                integrity and compassion.
              </p>
              <p className='mt-5'>
                <span className='block text-[var(--primary)] font-bold'>
                  CORE VALUES
                </span>
                <span>
                  <li>Welcoming</li>
                  <li>Friendly</li>
                  <li>Vibrant</li>
                  <li>Dependable</li>
                </span>
              </p>
            </div>
            <div className='mt-10'>
              <Link
                to='/register'
                className='bg-[var(--primary)] py-2 px-4 rounded text-white text-lg mr-4 hover:bg-[var(--hoverColor)] ease-in-out duration-300'
              >
                Create Account
              </Link>
              <Link
                to='/login'
                className='bg-[var(--primary)] py-2 px-4 rounded text-white text-lg hover:bg-[var(--hoverColor)] ease-in-out duration-300'
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        {/* right part */}
        <div className='hidden lg:block w-[50%]'>
          <div className='w-full m-auto rounded-md mt-40 overflow-hidden shadow-lg'>
            {/* <img src='/landing_img.svg' alt='' /> */}
            <img
              src='https://i.pinimg.com/564x/7b/d4/66/7bd46623d484c73fdbd198e4c85968e5.jpg'
              alt=''
              className='w-full'
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Landing
