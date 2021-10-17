import HeroImage from '@assets/images/mock/hero.svg';
import DownloadIcon from '@assets/images/mock/download_icon.svg';
import FacebookIcon from '@assets/images/mock/facebook.svg';
import GitHubIcon from '@assets/images/mock/github.svg';
import EmailIcon from '@assets/images/mock/email.svg';
import Head from 'next/head';

const MockHome = () => {

    return (
        <>
        <Head>
            <title>Huy Nguyen - Software Engineer</title>
            <meta name="title" content="Huy Nguyen - Software Engineer" />
            <meta name="description" content="Hi there, I am Huy" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://huynt.dev/" />
            <meta property="og:title" content="Huy Nguyen - Software Engineer" />
            <meta property="og:description" content="Hi there, I am Huy" />
            <meta property="og:image" content="/preview.jpeg" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.huynt.dev/" />
            <meta property="twitter:title" content="Huy Nguyen - Software Engineer" />
            <meta property="twitter:description" content="Hi there, I am Huy" />
            <meta property="twitter:image" content="/preview.jpeg" />
        </Head>
        <div className="w-screen h-screen grid relative grid-rows-1 grid-cols-12 gap-1 items-center bg-mockbg animate-fade">
            <div className="w-max col-start-1 col-span 6 self-center">
                <HeroImage className="hidden lg:block" />
            </div>
            <div className="col-start-7 col-span-5 self-center">
                <h1 className="text-5xl uppercase tracking-widest font-serif leading-snug text-mockpri">nguyen <br/>tuan <br/>huy</h1>
                <p className="max-w-xs block text-xl leading-10 mt-8 mb-14 font-thin font-san text-mocksec">
                    <b className="block mb-2">Are you looking for a <span className="uppercase">#Developer</span> able to solve business technical issues ?</b>
                    I&apos;m Huy, an experienced web developer contribute for years to the industry. I&apos;m not only delivering quality code but I&apos;m also being a long-term partner to your business.<br />
                    <span className="mt-4 block">Hopefully, we have a chance to work together</span>
                </p>
                <a className="flex w-max cursor-pointer items-center py-4 px-8 bg-mockpri text-white rounded-sm hover:bg-mockprihover transition-colors duration-300 ease-in-out" href="/CV.pdf" download><DownloadIcon className="mr-2" />Resume</a>
            </div>
            <div className="grid grid-rows-3 grid-cols-1 justify-items-center items-end absolute bottom-0 right-8">
                <div className="w-px h-32 border border-mockpri"></div>
                <ul>
                    <li className="mb-4">
                        <a href="https://www.facebook.com/tuanhuy.dev/" target="_blank" rel="noreferrer">
                            <FacebookIcon />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="https://github.com/tuanhuydev" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="mailto:tuanhuydev@gmail.com" target="_blank" rel="noreferrer">
                            <EmailIcon />
                        </a>
                    </li>
                </ul>
                <div className="w-px h-32 border border border-mockpri"></div>
            </div>
        </div>
        </>
    );
}

export default MockHome;