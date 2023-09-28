import React from 'react';

const Companysecond = () => {
    return (
        <div className='p-5 md:p-10 lg:py-10 lg:p-24 flex flex-col gap-10'>
            <div className='flex flex-col md:flex-row gap-5 md:justify-center md:items-center'>
                <div className='flex flex-col gap-2 md:w-1/2'>
                    <p className='text-[#AE0908] text-2xl font-bold lg:text-4xl'>About Us</p>
                    <p className='text-sm lg:text-lg'>Red Deer SRL is an Argentine company dedicated to the production of salted meats and cured meats, located in the province of Buenos Aires. Our establishment has equipment of the highest national and international technology, with experienced and trained personnel.We work with top-level suppliers that meet our demands to obtain a quality product at a competitive price. We have our own quality control laboratory where raw materials and finished products are analyzed, the hygiene of the processes is verified and research and development of new products is carried out.</p>
                </div>
                <div className='md:w-1/2 w-full'>
                    <img src="../images/companyaboutus.svg" alt="" className='w-full' />
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row gap-5 md:justify-center md:items-center'>
                <div className='md:w-1/2 w-full'>
                    <img src="../images/companyourmission.svg" alt="" className='w-full'/>
                </div>
                <div className='flex flex-col gap-2 md:w-1/2'>
                    <p className='text-[#AE0908] text-2xl font-bold lg:text-4xl'>Our Mission</p>
                    <p className='text-sm lg:text-lg'>
                        The main mission is to provide a product that meets the needs of our customers, without neglecting the commitment to food safety. To achieve this, we work with quality and safety tools such as:
                        <div>
                            <li>HACCP System (Hazard Analysis and Critical Control Points)</li>
                            <li>BPM</li>
                            <li>POES</li>
                            <li>MIP</li>
                        </div>
                        We carry out controls on raw materials, water, the manufacturing process, and finished products. and supplier audits.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Companysecond;
