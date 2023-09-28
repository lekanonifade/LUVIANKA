import React from 'react';
import Companyfirst from './1company/companyFirst';
import Companysecond from './2company/companySecond';
import Companythird from './3company/companyThird';
import Homefourth from '../homepage/4homepage/homepageFourth';

const Company = () => {
    return (
        <div className='flex flex-col gap-10'>
            <Companyfirst />
            <Companysecond />
            <Companythird />
            <div className="mb-10">
                <Homefourth />
            </div>
        </div>
    );
};

export default Company;
