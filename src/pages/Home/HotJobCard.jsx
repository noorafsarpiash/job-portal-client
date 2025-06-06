import React from 'react'
import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const { _id, title, company, location, company_logo, salary, requirements, description, salaryRange, currency } = job;
    return (
        <div className="card bg-base-100  shadow-sm">
            <div className='flex gap-2 m-2'>
                <figure>
                    <img className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-2xl">{company}</h4>
                    <p className='flex gap-1 items-center'> <FaMapMarkerAlt />  {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex gap-2 flex-wrap '>
                    {requirements.map((skill, index) => <p
                        key={index}

                        className='border rounded-md text-center px-2 hover:text-purple-600 hover:bg-gray-400'
                    >{skill}</p>)}
                </div>
                {/* <div className="card-actions justify-end items-center">
                    <p className='flex items-center'> Salary:<FaDollarSign />{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <button className="btn btn-primary">Buy Now</button>

                </div> */}
                <div className="card-actions justify-end  items-center">

                    <p className='flex flex-wrap items-center'> Salary:<FaDollarSign />{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>

                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply</button>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default HotJobCard