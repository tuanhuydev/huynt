const PageSkeleton = () => {
  return (
    <div className="animate-pulse">
        <div className="flex justify-between md:justify-start items-center lg:container px-2 md:px-4 lg:mx-auto py-8 lg:max-w-5xl">
          <div className="rounded bg-grey200 w-52 h-8"></div>
          <div className="md:px-2 hidden flex-1 items-center mx-auto text-grey500 md:flex md:justify-center">
            <div className="rounded bg-grey200 w-52 h-8 mr-2"></div>
            <div className="rounded bg-grey200 w-52 h-8"></div>
          </div>
          <div className="rounded bg-grey200 w-8 h-8 ml-auto"></div>
        </div>
        <div className="container mx-auto lg:max-w-5xl">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 h-full min-h-screen">
          <div className="pl-2 md:pl-2 lg:pl-4 2xl:pl-8 flex-column items-center justify-start order-2 lg:order-1 xlg:justify-start my-16 md:my-24 lg:my-48">
            <div className="rounded bg-grey200 w-1/2 h-4 mb-4"></div>
            <div className="rounded bg-grey200 w-full h-16 mb-6"></div>  
              <div className="text-sm md:text-base lg:text-lg text-grey800 dark:text-gray-500 mb-12 text-center lg:text-left">
              <div className="rounded bg-grey200 w-3/4 h-6 mb-2"></div>
              <div className="rounded bg-grey200 w-full h-6 mb-2"></div>
              <div className="rounded bg-grey200 w-full h-6 mb-8"></div>
              <div className="rounded bg-grey200 w-4/6 h-2 mb-2"></div>
              <div className="rounded bg-grey200 w-full h-2 mb-2"></div>
              </div>
          </div>
          <div className='pr-2 md:pr-2 lg:pr-4 2xl:pr-8 ml-0 lg:ml-4 flex-column items-center justify-center order-1 lg:order-2 xlg:justify-start my-16 md:my-24 lg:my-32 mx-auto rounded bg-grey200 w-full h-96'>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;