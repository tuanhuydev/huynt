import Logo from "../Logo";
import Link from 'next/link';
import ThemeSwitch from "../Buttons/ThemeSwitch";

const linkStyles = 'flex items-center justify-center py-5 px-3 w-28 text-grey500 hover:text-grey800 hover:bg-grey100 dark:hover:bg-grey200 duration-300 ease-linear';

const Navbar = () => {
  return (
    <div className="sticky top-0 glass dark:bg-transparent border border-t-0 border-r-0 border-l-0 border-grey200 dark:border-grey800 z-30">
      <div className="flex justify-between md:justify-start lg:container px-2 md:px-4 lg:mx-auto lg:max-w-5xl">
        <div className="flex-none py-3"><Link href="/"><a><Logo title="Huy Nguyen Tuan" /></a></Link></div>
        <div className="md:px-2 hidden flex-1 mx-auto text-grey500 md:flex md:justify-center">
          <Link href="#my-work">
            <a className={linkStyles}>Work</a>
          </Link>
          <Link href="/blogs">
            <a className={linkStyles}>Blog</a>
          </Link>
        </div>
        <div className="py-3 flex items-center">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}

export default Navbar;