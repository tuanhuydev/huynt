import Image from 'next/image';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const AboutMe = () => (
  <div className="container mx-auto max-w-5xl">
    <div className="h-2/4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 py-16 px-8" id="about-me">
      <div className="col-start-1 col-span-full lg:col-span-5">
        <h2 className='gradient mb-4 text-2xl font-bold text-center lg:text-left xlg:text-left'>{'<AboutMe />'}</h2>
        <div className="border border-grey300 dark:border-grey900 rounded-md flex flex-col items-center mx-auto lg:mx-0 xlg:mx-0 px-4 pt-6 pb-5" style={{ width: 315, height: 400 }}>
          <Image src="/images/avatar.png" width={200} height={200} alt="avatar" className='z-1' />
          <h3 aria-label='avatar' className='font-bold text-2xl mt-2 mb-2 text-grey800 dark:text-gray-500'>Huy Nguyen Tuan</h3>
          <h4 className='text-base tracking-wider font-thin text-grey800 dark:text-gray-500'>Software Engineer</h4>
          <div className="social flex p-5 gap-y-1.5 gap-x-4">
            <a href="https://github.com/tuanhuydev" target="_blank" rel="noreferrer" className='p-2 border border-grey300 dark:border-grey900 hover:bg-grey100 flex items-center justify-center rounded-md'><FaGithub className='w-6 h-full text-grey500 hover:text-grey700 dark:text-gray400' target='blank'/></a>
            <a href="mailto:tuanhuydev@gmail.com" target="_blank" rel="noreferrer" className='p-2 border border-grey300 dark:border-grey900 hover:bg-grey100 flex items-center justify-center rounded-md'><FaEnvelope className='w-6 h-full text-grey500 hover:text-grey700 dark:text-gray400' target='blank'/></a>
          </div>
        </div>
      </div>
      <div className="col-start-1 lg:col-start-6 col-span-full">
        <div className='pt-8'>
          <div className='mb-3 flex flex-col lg:flex-row text-center text-grey800 dark:text-gray-500'><b className='w-full lg:w-48 lg:flex gradient'>Sep 2016 - May 2020</b>Computer Science - Ton Duc Thang University.</div>
          <div className='mb-3 flex flex-col lg:flex-row text-center text-grey800 dark:text-gray-500'><b className='w-full lg:w-48 lg:flex gradient'>May 2019 - Aug 2019</b> <span>Internship - FABA Technology.</span></div>
          <div className='mb-3 flex flex-col lg:flex-row text-center text-grey800 dark:text-gray-500'><b className='w-full lg:w-48 lg:flex gradient'>Aug 2019 - Sep 2021</b>Software Engineer - FABA Technology.</div>
          <div className='mb-3 flex flex-col lg:flex-row text-center text-grey800 dark:text-gray-500'><b className='w-full lg:w-48 lg:flex gradient'>Oct 2021 - Present</b>Software Engineer - EPAM System.</div>
        </div>
      </div>
    </div>
  </div>
)

export default AboutMe;