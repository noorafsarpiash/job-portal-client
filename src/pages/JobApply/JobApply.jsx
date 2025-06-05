import React from 'react'
import { useParams } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';


const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    console.log(id, user);

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedin, github, resume);

        const jobApplication = {
            job_id: id,
            application_email: user.email,
            linkedin,
            github,
            resume
        }

        fetch("http://localhost:5000/job-application", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobApplication)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }

    return (

        <div className="card bg-base-100 w-full shadow-2xl">

            <h1 className="text-5xl font-bold text-center">Apply Job and Good Luck Now!</h1>
            <form onSubmit={submitJobApplication} className="card-body ">
                <div className='form-control '>
                    <fieldset className="fieldset ">
                        <label className="label">LinkedIn URL</label>
                        <input type="url" className="input w-full" name='linkedin' placeholder="LinkedIn URL" />
                        <label className="label">GitHub URL</label>
                        <input type="url" className="input w-full" name='github' placeholder="GitHub URL" />
                        <label className="label">Resume URL</label>
                        <input type="url" className="input w-full" name='resume' placeholder="Resume URL" />

                        <button className="btn btn-neutral mt-4">Apply</button>
                    </fieldset>
                </div>
            </form>
        </div>

    )
}

export default JobApply