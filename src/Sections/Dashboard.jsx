import React from "react";
import {
  BsFillArrowRightCircleFill,
  BsCardChecklist,
  BsClock,
} from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { MdDomainVerification } from "react-icons/md";
import { Link } from "react-router-dom";
import { setStatus } from "../store/actions/pasbandaraAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataDashboard } from "../store/actions/authAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const {dashboard} = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getDataDashboard())
    // eslint-disable-next-line
  },[])

  const verified = dashboard.dataVerified
  const unverified = dashboard.dataUnverified
  const administrator = dashboard.totalUser

  return (
    <div className="p-10">
      <div className="grid grid-rows-2 md:grid-cols-4 gap-y-8 md:gap-y-0 gap-x-8">
        <div className=" pt-3 pb-12 relative max-w-sm rounded-md overflow-hidden shadow-lg bg-cyan-600 text-gray-50">
          <div>
            <p className="px-6 font-bold text-3xl mb-2">{verified && verified + unverified}</p>
            <div className="px-6 text-md mb-2 w-1/2">Pas Bandara</div>
            <div className="absolute right-4 top-7">
              <BsCardChecklist size={80} className="text-gray-900 opacity-20" />
            </div>
            <Link
              to="/pasbandara"
              onClick={() => dispatch(setStatus("all"))}
              className="w-full absolute bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-10"
            >
              <p className="py-1 mr-2">More Info</p>
              <BsFillArrowRightCircleFill size={18} />
            </Link>
          </div>
        </div>

        <div className="pt-3 pb-12 relative max-w-sm rounded-md overflow-hidden shadow-lg bg-amber-500 text-gray-50">
          <div>
            <p className="px-6 font-bold text-3xl mb-2">{unverified && unverified}</p>
            <div className="px-6 text-md mb-2 w-1/2">Menunggu Verifikasi</div>
            <div className="absolute right-4 top-9">
              <BsClock size={70} className="text-gray-900 opacity-20" />
            </div>
            <Link
              to="/pasbandara"
              onClick={() => dispatch(setStatus("unverified"))}
              className="w-full absolute bottom-0 flex mt-7 items-center justify-center bg-gray-900 bg-opacity-10"
            >
              <p className="py-1 mr-2">More Info</p>
              <BsFillArrowRightCircleFill size={18} />
            </Link>
          </div>
        </div>

        <div className="pt-3 pb-12 relative max-w-sm rounded-md overflow-hidden shadow-lg bg-green-600 text-gray-50">
          <div>
            <p className="px-6 font-bold text-3xl mb-4">{verified && verified}</p>
            <div className="px-6 text-md mb-2 w-1/2">Terverifikasi</div>
            <div className="absolute right-4 top-6">
              <MdDomainVerification
                size={95}
                className="text-gray-900 opacity-20"
              />
            </div>
            <Link
              to="/pasbandara"
              onClick={() => dispatch(setStatus("verified"))}
              className="w-full absolute bottom-0 flex mt-7 items-center justify-center bg-gray-900 bg-opacity-10"
            >
              <p className="py-1 mr-2">More Info</p>
              <BsFillArrowRightCircleFill size={18} />
            </Link>
          </div>
        </div>

        <div className="pt-3 pb-12 relative max-w-sm rounded-md overflow-hidden shadow-lg bg-gray-400 text-gray-50">
          <div>
            <p className="px-6 font-bold text-3xl mb-4">{administrator}</p>
            <div className="px-6 text-md mb-2 w-1/2">Administrator</div>
            <div className="absolute right-4 top-7">
              <RiAdminFill size={80} className="text-gray-900 opacity-20" />
            </div>
            <Link
              to="/users"
              className="w-full absolute bottom-0 flex mt-7 items-center justify-center bg-gray-900 bg-opacity-10"
            >
              <p className="py-1 mr-2">More Info</p>
              <BsFillArrowRightCircleFill size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
