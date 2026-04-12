import React, { useContext } from "react";
import { TotalAppProvider } from "../Context/SingleContext";
import { FaDownload, FaStar } from "react-icons/fa";

const InstallationPage = () => {
  const { install, setInstall } = useContext(TotalAppProvider);

  

  const deleteHandel=(id)=>{
        const delteSection = install.filter ((app)=> app.id !== id)
        setInstall(delteSection)
  }
  return (

          <div className="bg-[#F5F5F5] pt-15">
            <div className="max-w-[1440px]  mx-auto min-h-[100vh] px-5">
            <div className="mb-15">
              <h1 className="text-[40px] font-bold text-center">Your Installed Apps</h1>
            <p className="text-[#627382] text-center">Explore All Trending Apps on the Market developed by us</p>
            </div>
             
            {
              install.length == 0? <div>
                <h1 className="text-3xl font-bold text-center pt-9">No Apps Installed Yet</h1>
              </div>: <div className="space-y-4">
              {
                install.map((app)=>{
                  return <div className="flex border border-black/15 justify-between p-4 rounded-2xl items-center bg-white">
            <div className=" flex items-center gap-1">
              <img src={app.image} alt="" className="w-[100px]" />
              <div>
                <h2 className="text-[20px]">Forest: <span>Focus for Productivity</span></h2>
                <div className="flex justify-between">
                  <h4 className="text-green-500 flex items-center gap-1">
                    <FaDownload></FaDownload> {app.downloads}
                  </h4>
                  <h4 className="text-yellow-500 flex items-center gap-1">
                    <FaStar></FaStar> {app.ratingAvg}
                  </h4>
                </div>
              </div>
            </div>
            <button onClick={()=> deleteHandel(app.id)} className="btn btn-accent text-white">Uninstall</button>
          </div>
                })
              }
             </div>
            }
          </div>
          </div>

  );
};

export default InstallationPage;
