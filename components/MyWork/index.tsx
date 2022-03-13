import Image from 'next/image';
const MyWork = () => {
  const products = [
    {
      id: 1,
      thumbnail: '/images/projects/pulse.png',
      alt: 'pulse - all in one management system',
      name: 'PulseMS',
      description: 'PulseMS is a complex all-in-one management system providing powerful features to manage resources, budget, and planning for the enterprise.'
    },
    {
      id: 2,
      thumbnail: '/images/projects/cti.png',
      alt: 'Care Transitions Intervention - Heathcare system',
      name: 'CTI',
      description: `CTI is an evidence-based, short-term model that complements a systems's care team by activating patient engagement in their health management.`
    },
    {
      id: 3,
      thumbnail: '/images/projects/rapbank.png',
      alt: 'Rapbank',
      name: 'Rapbank',
      description: 'Rapbank is an online personal-banking application provides a platform where borrowers and banking service providers can connect to each other.'
    },
    {
      id: 4,
      thumbnail: '/images/projects/faba.png',
      alt: 'FABA website',
      name: 'FABA website',
      description: 'The company kickoff v1.0->v2.0 official website.'
    },
  ]
  return (
    <section className="container mx-auto max-w-5xl">
      <div className="h-2/4 py-16 px-8" id="my-work">
        <h2 className='gradient mb-4 text-2xl font-bold text-center lg:text-left xlg:text-left'>{'<My Work />'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-2 lg:gap-4">
          {
            products.map((product) => {
              return (
                <div className="col-auto transition-all w-auto sm:w-96 md:w-auto sm:mx-auto md:mx-0 brightness-90 hover:brightness-100 hover:bg-grey100 hover:shadow p-4 rounded" key={product.id}>
                  <div className="product__image w-auto h-96 mb-4 relative">
                    <Image src={product.thumbnail} layout='fill' className='rounded' alt={product.alt} />
                  </div>
                  <div className="production__name mb-2 text-2xl">{product.name}</div>
                  <div className="production__description text-sm text-gray-400">{product.description}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
};

export default MyWork;