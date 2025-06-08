import React from 'react'

const AddJob = () => {
    return (
        <div>

            <h2 className="text-3xl"></h2>Post a Job
            <form >
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
                        <select defaultValue="Pick a font" className="select select-ghost">
                            <option disabled={true}>Pick a Job type</option>
                            <option>Full-time</option>
                            <option>Intern</option>
                            <option>Part-time</option>
                        </select>
                    </div>
                    {/* job category */}
                    <div className="form-control">
                        <label className="label">Job Field</label>
                        <select defaultValue="Pick a font" className="select select-ghost w-full max-w-xs">
                            <option disabled={true}>Pick a Job Field</option>
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

                            <select defaultValue="Pick a font" className="select select-ghost w-full">
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

                        <textarea className="textarea w-full" placeholder="put each requirements in a new line" name='description' required></textarea>
                    </div>


                    {/* submit button */}

                    <div className='form-control mt-6'> <button className="btn btn-neutral mt-4">Post Job</button></div>
                </fieldset>
            </form>

        </div>

    )
}

export default AddJob