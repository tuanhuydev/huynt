import HeroImage from '@assets/images/mock/hero.svg';
import DownloadIcon from '@assets/images/mock/download_icon.svg';
import FacebookIcon from '@assets/images/mock/facebook.svg'
import GitHubIcon from '@assets/images/mock/github.svg'
import EmailIcon from '@assets/images/mock/email.svg'

const MockHome = () => {

    return (
        <div className="w-screen h-screen grid relative grid-rows-1 grid-cols-12 gap-1 items-center bg-mockbg animate-fade">
            <div className="w-max col-start-1 col-span 6 self-center">
                <HeroImage className="hidden lg:block" />
            </div>
            <div className="col-start-7 col-span-5 self-center">
                <h1 className="text-5xl uppercase tracking-widest font-serif leading-snug text-mockpri">nguyen <br/>tuan <br/>huy</h1>
                <p className="max-w-xs block text-xl leading-10 mt-8 mb-14 font-thin font-san text-mocksec">
                    <b className="block mb-2">Are you looking for a <span className="uppercase">#Developer</span> able to solve business technical issues ?</b>
                    I&apos;m Huy, a experience web developer contribute for years to the industry and companies. I&apos;m not only delivery quality code but also long-term parner to your business.<br />
                    <span className="mt-4 block">Hopefully, we have a chance to sit down and push your business.</span>
                </p>
                <a className="flex w-max cursor-pointer items-center py-4 px-8 bg-mockpri text-white rounded-sm hover:bg-mockprihover transition-colors duration-300 ease-in-out" href="/CV.pdf" download><DownloadIcon className="mr-2" />Resume</a>
            </div>
            <div className="grid grid-rows-3 grid-cols-1 justify-items-center items-end absolute bottom-0 right-8">
                <div className="w-px h-32 border border-mockpri"></div>
                <ul>
                    <li className="mb-4">
                        <a href="https://www.facebook.com/tuanhuy.dev/" target="_blank">
                            <FacebookIcon />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="https://github.com/tuanhuydev" target="_blank">
                            <GitHubIcon />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="mailto:tuanhuydev@gmail.com" target="_blank">
                            <EmailIcon />
                        </a>
                    </li>
                </ul>
                <div className="w-px h-32 border border border-mockpri"></div>
            </div>
        </div>
    );
}

export default MockHome;