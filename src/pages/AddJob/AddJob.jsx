import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const AddJob = () => {

    const { user } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries());
        const intialData = Object.fromEntries(formData.entries());
        // console.log(intialData);
        const { min, max, currency, ...newJob } = intialData;
        console.log(min, max, currency, newJob);
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split("\n");
        newJob.responsibilities = newJob.responsibilities.split("\n");
        console.log(newJob);

        fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job has been added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/myPostedJobs");
                }
            })


    }
    return (
        <div>

            <h2 className="text-3xl"></h2>Post a Job
            <form onSubmit={handleSubmit} >
                <fieldset className="fieldset">
                    {/* job location */}
                    <div className="form-control ">
                        <label className="label flex my-2">Job Title</label>
                        <input type="text" className="input w-full" name='title' required placeholder="Job Title" />
                    </div>
                    {/* job location */}
                    <div className="form-control">
                        <label className="label flex my-2">Job Location</label>
                        <input type="text" className="input w-full" name='location' required placeholder="Job Location" />
                    </div>
                    {/* job type */}
                    <div className="form-control">
                        <label className="label">Job Type</label>
                        <select defaultValue="Pick a Job type" className="select select-ghost">
                            <option disabled={true}>Pick a Job type</option>
                            <option>Full-time</option>
                            <option>Intern</option>
                            <option>Part-time</option>
                        </select>
                    </div>
                    {/* job category */}
                    <div className="form-control">
                        <label className="label">Job Field</label>
                        <select defaultValue="Pick a Job Field" className="select select-ghost w-full max-w-xs">
                            <option disabled>Pick a Job Field</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                        </select>
                    </div>

                    {/* salary range */}



                    <div className=' grid grid-col-1 lg:grid-cols-3 items-end gap-4 mt-4'>
                        <div className="form-control">
                            <label className="label flex my-2">Salary Range</label>
                            <input type="text" className="input w-full"
                                name='min' required
                                placeholder="Min" />
                        </div>
                        <div className="form-control">

                            <input type="text" className="input w-full"
                                name='max' required
                                placeholder="Max" />
                        </div>

                        <div className="form-control">

                            <select defaultValue="Currency" name='currency' className="select select-ghost w-full">
                                <option disabled={true}>Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>INR</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>

                    {/* job description */}
                    <div className="form-control ">
                        <label className="label flex my-2">Job Description</label>

                        <textarea className="textarea w-full" placeholder="Job Description" name='description' required></textarea>
                    </div>

                    {/* Company Name */}
                    <div className="form-control">
                        <label className="label flex my-2">Company Name</label>
                        <input type="text" className="input w-full" name='company' required placeholder="Company Name" />
                    </div>


                    {/* job requirements */}
                    <div className="form-control ">
                        <label className="label flex my-2">Job Requirements</label>

                        <textarea className="textarea w-full" placeholder="put each requirements in a new line" name='requirements' required></textarea>
                    </div>
                    {/* responsibilities */}
                    <div className="form-control ">
                        <label className="label flex my-2">Job Responsibilities</label>

                        <textarea className="textarea w-full" placeholder="Write each responsibility in a new line" name='responsibilities' required></textarea>
                    </div>


                    {/* HR Name */}
                    <div className="form-control">
                        <label className="label flex my-2">HR Name</label>
                        <input type="text" className="input w-full" name='hr_name' required placeholder="HR Name" />
                    </div>

                    {/* application deadline */}
                    <div className="form-control">
                        <label className="label flex my-2">Deadline</label>
                        <input type="date" defaultValue={user?.email}
                            className="input w-full" name='applicationDeadline' required placeholder="HR Email" />
                    </div>
                    {/* HR Email */}
                    <div className="form-control">
                        <label className="label flex my-2">HR Email</label>
                        <input type="text" defaultValue={user?.email}
                            className="input w-full" name='hr_email' required placeholder="Deadline" />
                    </div>

                    {/* Company Logo URL */}
                    <div className="form-control">
                        <label className="label flex my-2">Company Logo URL</label>
                        <input type="text" className="input w-full" name='company_logo' required placeholder="Company Logo URL" />
                    </div>

                    {/* submit button */}

                    <div className='form-control mt-6'> <button className="btn btn-neutral mt-4">Post Job</button></div>
                </fieldset>
            </form>

        </div>

    )
}

export default AddJob