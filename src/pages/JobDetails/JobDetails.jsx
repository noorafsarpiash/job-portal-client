import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job);
    return (
        <div>JobDetails</div>
    )
}

export default JobDetails