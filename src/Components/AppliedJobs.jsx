import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(() => {
        const storedJobsId = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobsId) {
                const job = jobs.find((job) => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            // console.log(jobs, storedJobsId, jobsApplied)
            setAppliedJobs(jobsApplied)
        }
    }, [])
    return (
        <div>
            <h2>Applied Jobs: {appliedJobs.length}</h2>
        </div>
    );
};

export default AppliedJobs;