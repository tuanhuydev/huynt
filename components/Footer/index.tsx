import styles from './styles.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container mx-auto max-w-5xl">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-12 px-8 py-4 border border-b-0 border-r-0 border-l-0 border-grey200 dark:border-grey800">
        <div className="col-start-1 col-span-full flex justify-center md:justify-start md:col-span-2 lg:col-span-6 items-center  text-grey700 dark:text-gray-300">
          &copy;{currentYear}. Huy Nguyen Tuan. All Rights Reserved.
        </div>
      </div>
    </div>
    
  );
};

export default Footer;