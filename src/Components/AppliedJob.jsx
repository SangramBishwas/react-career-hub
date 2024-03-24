import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const AppliedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mb-5">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex gap-4">
                        <button className="btn border-[#7E90FE] text-xl text-[#9873FF] font-md">{remote_or_onsite}</button>
                        <button className="btn border-[#7E90FE] text-[#9873FF] text-xl font-md">{job_type}</button>
                    </div>
                    <div className="flex gap-6">
                        <h3 className="flex items-center text-xl"><SlLocationPin />{location}</h3>
                        <h3 className="flex items-center text-xl"><AiOutlineDollar />{salary}</h3>
                    </div>
                    <div className="card-actions justify-end">
                    <Link to={`./job/${id}`}>
                            <button className="btn btn-primary">View details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;