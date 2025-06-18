// import Swal from "sweetalert2";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

// const axiosSecure = useAxiosSecure();

// // এরপর handleSubmit ফাংশনের ভেতরে

// axiosSecure.post("/jobs", newJob)
//     .then(res => {
//         if (res.data.insertedId) {
//             Swal.fire({
//                 position: "top-end",
//                 icon: "success",
//                 title: "Job has been added successfully",
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//             navigate("/myPostedJobs");
//         }
//     });


import axios from 'axios'
import React, { useEffect } from 'react'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true

})

const useAxiosSecure = () => {

    const { signOutUser } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log("error cought in interceptors", error);

            if (error.status === 401 || error.status === 403) {
                console.log("need to logout the user");
                signOutUser()
                    .then(() => {
                        console.log("logged out user");
                        navigate("/signIn");
                    })
                    .catch(error => console.log(error))


            }

            return Promise.reject(error);

        })
    }, [])

    return axiosInstance;
}

export default useAxiosSecure