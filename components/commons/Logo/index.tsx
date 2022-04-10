import Icon from 'assets/images/logo.svg'

export interface LogoProps {
  title?: string;
}

const Logo = ({ title }: LogoProps) => {
  return (<div className='flex items-center'>
    <Icon />
    {title && (<h1 className='text-xl text-grey900 dark:text-grey400 font-san tracking-normal'>{title}</h1>)}
  </div>);
}

export default Logo;