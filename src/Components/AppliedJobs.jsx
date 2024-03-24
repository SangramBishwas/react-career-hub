import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])
    useEffect(() => {
        const storedJobsId = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobsId) {
                const job = jobs.find((job) => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            // console.log(jobs, storedJobsId, jobsApplied)
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    }, [])

    const handleJobsFilter = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        } else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter((job) => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter((job) => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    return (
        <div>
            <div className="bg-[#9873ff0d] p-20">
                <h2 className="text-center text-3xl font-bold">Applied Jobs: {appliedJobs.length}</h2>
            </div>
            <div className="flex justify-end mt-20 mr-64">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </div>
            </div>
            <div className="mx-64 mb-20">
                {
                    displayJobs.map((job) => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;