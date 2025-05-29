import React from 'react'

import { motion, easeInOut } from "framer-motion";
import team1 from "../../assets/team/team-1.jpg"
import team2 from "../../assets/team/team-2.jpg"
// import * as motion from "motion/react-client"

// import { easeInOut } from 'motion'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{ y: [100, 150, 100] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-6456 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, delay: 3, repeat: Infinity }}
                        className="max-w-sm w-6456 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
                    />
                </div>
                <div className='flex-1'>


                    <motion.h1
                        transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                        animate={{ x: 50, }}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{ color: ["#ffa233", "#ff1107", "#ffc812"] }}
                            transition={{ duration: 1.5, repeat: Infinity }}

                        >Jobs</motion.span> for you!</motion.h1>


                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Banner