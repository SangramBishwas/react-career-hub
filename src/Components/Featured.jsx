import { useEffect, useState } from "react";
import Job from "./Job";

const Featured = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="mx-64">
            <div>
                <h2 className="text-5xl text-center">Featued Jobs: {jobs.length}</h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map((job) => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`${"flex justify-center mt-12"} ${dataLength === jobs.length && 'hidden'}`}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
            </div>
        </div>
    );
};

export default Featured;