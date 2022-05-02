import { useWidth } from 'hooks/use-width';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import ReactWordcloud, { Optional, Options, Word } from 'react-wordcloud';
import styles from './styles.module.scss';

const getWordCloudConfigs = (width: number) => {
  const words = [
    {
      text: 'ReactJS',
      value: 2000,
    },
    {
      text: 'HTML',
      value: 500,
    },
    {
      text: 'CSS',
      value: 1500,
    },
    {
      text: 'SASS',
      value: 900,
    },
    {
      text: 'NodeJS',
      value: 1250,
    },
    {
      text: 'Javascript',
      value: 1800,
    },
    {
      text: 'NextJS',
      value: 800,
    },
    {
      text: 'Git',
      value: 750,
    },
    {
      text: 'Webpack',
      value: 750,
    },
    {
      text: 'Docker',
      value: 750,
    },
    {
      text: 'Angular',
      value: 1700,
    },
    {
      text: 'ESlint',
      value: 700,
    },
    {
      text: 'Go',
      value: 800,
    },
    {
      text: 'PHP(Laravel)',
      value: 800,
    },
  ];

  const options : Optional<Options>= {
    rotations: 2,
    scale: 'sqrt',
    rotationAngles: [-45, 0],
    fontSizes: [16, 50],
    padding: 2
  };

  const boundSize = width * 0.75 < 250 ? width * 0.75 : 250;
  const size: [number, number] = [100, boundSize];

  const callbacks = {
    getWordColor: () => '#367C93',
    onWordClick: undefined,
    onWordMouseOver: undefined,
    getWordTooltip: (word: Word) => "",
  };

  return {
    words,
    options,
    size,
    callbacks,
  }
}

const getCareerPaths = () => ({
  'Sep 2016 - May 2020' : 'Computer Science - Ton Duc Thang University.' ,
  'May 2019 - Aug 2019' : 'Internship - FABA Technology.' ,
  'Aug 2019 - Sep 2021' : 'Software Engineer - FABA Technology.',
  'Oct 2021 - Present' : 'Software Engineer - EPAM System.' 
});

const AboutMe = () => {
  const [clientSideRender, setClientSideRender] = useState(false);
  const width = useWidth();

  useEffect(() => {
    setClientSideRender(true);
  }, []);
  
  return (<div className="container mx-auto max-w-5xl">
    <div className="h-2/6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 pt-20 px-8" id="about-me">
      <div className="col-start-1 col-span-full lg:col-span-5">
        <h2 className='gradient mb-4 text-2xl font-bold text-center lg:text-left xlg:text-left'><code>&#60;AboutMe&#47;&#62;</code></h2>
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
        <div className='pt-10'>
        <h4 className='text-lg font-bold text-grey400 dark:text-gray-500 mb-6 text-center lg:text-left'>My proud milestones: </h4>
          {
            Object.entries(getCareerPaths()).map(([key, value]) => (
              <div key={key} className='mb-3 flex flex-col lg:flex-row text-center text-grey800 dark:text-gray-500'><b className='w-full lg:w-48 lg:flex gradient'>{key}</b>{value}</div>
            ))
          }
        </div>
        <div className={`flex-column items-center justify-center ${styles.wordcloud}`}>
          <h4 className='pt-8 text-lg font-bold text-grey400 dark:text-gray-500'>I can help you solve: </h4>
          {/* Force render in client side because of the incompatible issue between nextjs and wordcloud */}
          {clientSideRender && (<ReactWordcloud {...getWordCloudConfigs(width)} />)}
        </div>
      </div>
    </div>
  </div>);
}

export default AboutMe;