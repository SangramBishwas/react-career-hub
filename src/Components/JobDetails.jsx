import { useLoaderData, useParams } from "react-router-dom";
import { savedJobApplicaton } from "../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find((job) => job.id === idInt)
    // console.log(job, id)
    const { job_description, job_responsibility, educational_requirements, experiences, contact_information, job_title, salary } = job;
    const { phone, email, address } = contact_information;

    const handaleApplyNow = () =>{
        savedJobApplicaton(idInt)
    }
    return (
        <div>
            <div className="bg-[#9873ff0d] p-20">
                <h2 className="text-center text-3xl font-bold">Job Details</h2>
            </div>
            <div className="grid grid-cols-5 gap-5 mx-64 my-24">
                <div className="col-span-3 space-y-6">
                    <div>
                        <p><span className="font-bold">Job Description:</span> {job_description}</p>
                    </div>
                    <div>
                        <p><span className="font-bold">Job Responsiblity:</span> {job_responsibility}</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold">Educational Requirements:</h3>
                        <p>{educational_requirements}</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold">Expriences:</h3>
                        <p>{experiences}</p>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="bg-[#9873ff0d] p-8">
                        <h3 className="border-b border-[#7E90FE] pb-6 text-xl font-bold">Job Details</h3>
                        <div className="py-4">
                            <h3 className="font-semibold text-xl text-[#474747]">Salary: <span className="text-[#757575]">{salary}</span></h3>
                            <h3 className="font-semibold text-xl text-[#474747] pt-4">Job Title: <span className="text-[#757575] font-normal">{job_title}</span></h3>
                        </div>
                        <h3 className="border-b border-[#7E90FE] pb-6 text-xl font-bold pt-6">Contact Information</h3>
                        <div className="py-4">
                            <h3 className="font-semibold text-xl text-[#474747]">Phone: <span className="text-[#757575]">{phone}</span></h3>
                            <h3 className="font-semibold text-xl text-[#474747] pt-4">Emai: <span className="text-[#757575] font-normal">{email}</span></h3>
                            <h3 className="font-semibold text-xl text-[#474747] pt-4">Address: <span className="text-[#757575] font-normal">{address}</span></h3>
                        </div>
                    </div>
                    <div className="pt-5">
                        <button onClick={handaleApplyNow} className="btn btn-primary text-xl w-full">Apply Now </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;