import HeroImage from '@assets/images/mock/hero.svg';
import DownloadIcon from '@assets/images/mock/download_icon.svg';
import FacebookIcon from '@assets/images/mock/facebook.svg';
import GitHubIcon from '@assets/images/mock/github.svg';
import EmailIcon from '@assets/images/mock/email.svg';
import AvatarImage from '@assets/images/mock/avatar.svg';

const MockHome = () => {

    return (
        <div className="min-h-screen grid relative grid-rows-1 grid-cols-12 items-center bg-mockbg animate-fade lg:gap-x-10 overflow-hidden">
            <div className="hidden lg:block lg:col-start-1 lg:col-span-3 xl:col-start-1 xl:col-span-6 w-max self-center">
                <HeroImage className="hidden lg:block" />
            </div>
            <div className="col-span-full px-8 self-center lg:col-start-7 lg:col-end-12 lg:px-0">
                <div className="flex flex-col sm:flex-row sm:justify-between md:flex-col lg:items-start">
                    <AvatarImage className="block lg:hidden py-1 " />
                    <h1 className="text-2xl my-8 uppercase tracking-widest font-serif leading-snug text-mockpri break-all sm:my-0 sm:text-4xl md:text-5xl md:my-8 lg:w-100">nguyen<br/>tuan <br/>huy</h1>
                </div>
                
                <p className="block text-left leading-10 font-thin font-san text-mocksec sm:mt-8 sm:mb-10 sm:w-8/12 md:my-8 md:text-lg md:w-8/12 lg:mt-8 lg:mb-14 lg:text-base lg:w-8/12 xl:text-xl xl:w-10/12">
                    <span className="block mb-4 text-bold text-2xl font-medium"><span className="font-extrabold uppercase">#Developer</span> to solve problem</span>
                    I&apos;m Huy, an experienced web developer contribute for years to the industry. I&apos;m not only delivering quality code but I&apos;m also being a long-term partner to your business.<br />
                    <span className="sm:mt-2 md:mt-3 lg:mt-4 block">Hopefully, we have a chance to work together</span>
                </p>
                <a className="flex w-max cursor-pointer items-center py-3 px-5 bg-mockpri text-white rounded-sm hover:bg-mockprihover transition-colors duration-300 ease-in-out" href="/CV.pdf" download><DownloadIcon className="mr-2" />Resume</a>
            </div>

            <div className="
                    col-start-1 col-span-full
                    grid grid-rows-1 grid-cols-3
                    justify-items-center items-center
                    col-start-3 col-span-8
                    gap-x-2
                    mt-8
                    mb-4
                    sm:mt-0
                    sm:mb-0
                    sm:col-start-4 sm:col-span-6 sm:gap-x-1
                    md:gap-x-2
                    lg:grid-rows-3 lg:grid-cols-1 lg:justify-items-center lg:items-end lg:absolute lg:bottom-0 lg:right-8 lg:col-start-11">
                <div className="h-px w-10 bg-mockpri sm:w-28 lg:h-32 lg:w-px"></div>
                <ul className="flex flex-row justify-center items-center content-center mx-2 sm:mx-0 lg:flex-col">
                    <li className="mr-4 lg:mr-0 lg:mb-4">
                        <a href="https://www.facebook.com/tuanhuy.dev/" target="_blank" rel="noreferrer">
                            <FacebookIcon />
                        </a>
                    </li>
                    <li className="mr-4 lg:mr-0 lg:mb-4">
                        <a href="https://github.com/tuanhuydev" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                        </a>
                    </li>
                    <li className="lg:mb-4">
                        <a href="mailto:tuanhuydev@gmail.com" target="_blank" rel="noreferrer">
                            <EmailIcon />
                        </a>
                    </li>
                </ul>
                <div className="h-px w-10 bg-mockpri sm:w-28 lg:h-32 lg:w-px"></div>
            </div>
        </div>
    );
}

export default MockHome;