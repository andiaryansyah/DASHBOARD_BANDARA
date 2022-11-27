import React from 'react'

const Dashboard = () => {
  return (
    <div className="p-10">
    <div className="grid grid-cols-4 gap-x-8">
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-sky-500 text-gray-50" >
        <div className="px-6 py-8">
            <div className="font-bold text-xl mb-2">User</div>
            <p className=" text-base">
                0
            </p>
        </div>  
    </div>

    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-green-500 text-gray-50" >
        <div className="px-6 py-8">
            <div className="font-bold text-xl mb-2">Survey</div>
            <p className=" text-base">
                0
            </p>
        </div>  
    </div>

    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-yellow-500 text-gray-50" >
        <div className="px-6 py-8">
            <div className="font-bold text-xl mb-2">Pengaduan</div>
            <p className=" text-base">
                0
            </p>
        </div>  
    </div>

    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-red-500 text-gray-50" >
        <div className="px-6 py-8">
            <div className="font-bold text-xl mb-2">Pas Bandara</div>
            <p className=" text-base">
                0
            </p>
        </div>  
    </div>
</div>
</div>
  )
}

export default Dashboard