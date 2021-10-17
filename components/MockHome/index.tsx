import HeroImage from '@assets/images/mock/hero.svg';
import DownloadIcon from '@assets/images/mock/download_icon.svg';

const MockHome = () => {

    return (
        <div className="opacity-1 w-screen h-screen grid relative grid-rows-1 grid-cols-12 gap-1 items-center bg-mockbg transition-opacity duration-500 ease-in-out">
            <div className="w-max col-start-1 col-span 6 self-center">
                <HeroImage className="hidden lg:block" />
            </div>
            <div className="col-start-7 col-span-5 self-center">
                <h1 className="text-5xl uppercase tracking-widest font-serif leading-snug text-mockpri">nguyen <br/>tuan <br/>huy</h1>
                <p className="max-w-xs block text-xl leading-10 mt-8 mb-14 font-thin font-san text-mocksec">
                    <b className="block mb-2">Are you looking for a <span className="uppercase">#Developer</span> able to solve business technical issues ?</b>
                    I'm Huy, a experience web developer contribute for years to the industry and companies. I'm not only delivery quality code but also long-term parner to your business.<br />
                    <span className="mt-4 block">Hopefully, we have a chance to sit down and push your business.</span>
                </p>
                <a className="flex w-max cursor-pointer items-center py-4 px-8 bg-mockpri text-white rounded-sm hover:bg-mockprihover transition-colors duration-300 ease-in-out" href="/CV.pdf" download><DownloadIcon className="mr-2" />Resume</a>
            </div>
            <div className="relative">

            </div>
        </div>
    );
}

export default MockHome;