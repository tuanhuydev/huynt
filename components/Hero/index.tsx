import IconLg from 'assets/images/graphic/icon_lg.svg';
import IconSm from 'assets/images/graphic/icon_sm.svg';
import { useWidth } from 'hooks/use-width';


const Hero = () => {
  const width = useWidth();

  return (
    <div className="container mx-auto lg:max-w-5xl">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 h-full min-h-screen">
        <div className="flex-column items-center justify-start order-2 lg:order-1 xlg:justify-start my-16 md:my-24 lg:my-48">
          <h3 className="text-grey800 dark:text-gray-500  mb-2 text-center text-base md:text-xl lg:text-2xl lg:text-left">Your Friendly Neighborhood</h3>
            <h1 className="mb-8 leading-relaxed gradient font-san font-bold text-center lg:text-left text-4xl"><code>&#60;Developer&#47;&#62;</code></h1>
            <div className="text-sm md:text-base lg:text-lg text-grey800 dark:text-gray-500 mb-12 text-center lg:text-left">
              <p>Huy is a developer based in Ho Chi Minh, Viet Nam,</p>
              <p>with tech passion and contribute the world with his code.</p>
              <p>He had great opportunities to work on amazing projects,</p>
              <p>to help grow many businesses, <strong className='gradient underline'>including yours.</strong></p>
              <span className='mt-3 block'>Welcome you to his website. &#128512;</span>
            </div>
            <div className='flex justify-center lg:justify-start'>
              <a className='gradient-button-default mr-3 text-md lg:text-base rounded' href='#my-work'>View Work</a>
              <a className='gradient-button-outline text-md lg:text-base rounded' href='#about-me'>My Portfolio</a>
            </div>
        </div>
        <div className='pr-2 md:pr-2 lg:pr-4 2xl:pr-8 flex-column items-center justify-center order-1 lg:order-2 xlg:justify-start my-16 md:my-24 lg:my-32 mx-auto'>
            { width > 650 ? <IconLg /> : <IconSm /> }
        </div>
      </div>
    </div>
  
  );
}

export default Hero;