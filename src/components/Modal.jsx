import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {AiFillEye} from "react-icons/ai";
import JPEG from "../assets/jpeg.svg";
import PDF from "../assets/pdf.svg";
import { getData } from "../store/actions/pasbandaraAction";
import { toast } from "react-toastify";
import axios from 'axios';
import {TbListDetails} from 'react-icons/tb';

const Modal = ({ email }) => {
  const { data, status, filter } = useSelector((state) => state.pasbandara);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch()

  const findData = data.findIndex((item) => item.email === email);

//   function getExtension(filename) {
//     return filename.split(".").pop();
//   }

  function getExt(filename) {
    if (filename === null ) {
        return <p className="py-3 px-1">Tidak ada File</p>
    } else {
    let filterFile = filename.split(".").pop();

    if (filterFile.toLowerCase() === "pdf") {
        return <img src={PDF} alt="pdf" />
    } else {
        return <img src={JPEG} alt="jpg" />
    }
}
  }

  function handleVerifikasi(id) {
    let isExecuted = window.confirm("Apakah anda yakin akan memverifikasi data?");
    if (isExecuted) {
      axios({
        method: "PATCH",
        url: `${process.env.REACT_APP_API_URL}/pasbandara/verified/${id}`,
    })
    .then((res) => {
      dispatch(getData({filter, status}));
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_CENTER
      });
      setShowModal(false)
    })
    .catch((err) => {
      let errMessage = "Verifikasi gagal. Coba lagi!"
      if (err.response.data.message) errMessage = err.response.data.message 
      toast.error(errMessage, {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    }
  }

  return (
    <>
      <button
        className="bg-gradient-to-b from-blue-500 to-blue-600 hover:bg-gradient-to-b hover:from-blue-700 hover:to-blue-800 shadow-blue-600/50 text-white text-xs font-semibold py-2 px-3 rounded-md m-auto"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <TbListDetails />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none" onClick={() => setShowModal(false)}>
            <div className="relative w-11/12 md:w-1/2 my-6 mx-auto max-w-5xl overflow-y-auto h-5/6" onClick={e => { e.stopPropagation()}}>
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="fixed bg-gray-50 w-11/12 md:w-1/2 flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t z-40">
                  <h3 className="text-3xl font-semibold">Detail Verifikasi</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 mt-16">

                  <div className="w-full p-3">
                    <div className="text-start font-bold">
                      <h1>Surat Permohonan (Dari Kantor Admin Bandara) </h1>
                    </div>
                    <div className="flex justify-between items-center mt-2 p-3 bg-slate-200">
                    {getExt(data[findData].surat_permohonan)}
                      
                      {data[findData].surat_permohonan !== null &&
                      <a
                        href={data[findData].surat_permohonan}
                        download={`Surat Permohonan - ${email}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4"
                      >
                        <button className="bg-gradient-to-b from-gray-500 to-gray-600 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 shadow-gray-600/50 p-2 text-white flex items-center rounded-md">
                          <AiFillEye size={20} className="pr-1" /> Preview
                        </button>
                      </a>
                      }
                      </div>
                  </div>

                  <div className="w-full p-3">
                    <div className="text-start font-bold">
                      <h1>Pas Foto </h1>
                    </div>
                    <div className="flex justify-between items-center mt-2 p-3 bg-slate-200">
                    {getExt(data[findData].foto)}

                      {data[findData].foto !== null &&
                      <a
                        href={data[findData].foto}
                        download={`Surat Permohonan - ${email}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4"
                      >
                        <button className="bg-gradient-to-b from-gray-500 to-gray-600 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 shadow-gray-600/50 p-2 text-white flex items-center rounded-md">
                          <AiFillEye size={20} className="pr-1" /> Preview
                        </button>
                      </a>
                      }
                      </div>
                  </div>

                  <div className="w-full p-3">
                    <div className="text-start font-bold">
                      <h1>Surat Pernyataan dari Atasan </h1>
                    </div>
                    <div className="flex justify-between items-center mt-2 p-3 bg-slate-200">
                    {getExt(data[findData].pernyataan_atasan)}

                      {data[findData].pernyataan_atasan !== null &&
                      <a
                        href={data[findData].pernyataan_atasan}
                        download={`Surat Permohonan - ${email}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4"
                      >
                        <button className="bg-gradient-to-b from-gray-500 to-gray-600 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 shadow-gray-600/50 p-2 text-white flex items-center rounded-md">
                          <AiFillEye size={20} className="pr-1" /> Preview
                        </button>
                      </a>
                      }
                      </div>
                  </div>

                  <div className="w-full p-3">
                    <div className="text-start font-bold">
                      <h1>Riwayat Hidup </h1>
                    </div>
                    <div className="flex justify-between items-center mt-2 p-3 bg-slate-200">
                    {getExt(data[findData].riwayat_hidup)}

                    {data[findData].riwayat_hidup !== null &&
                      <a
                        href={data[findData].riwayat_hidup}
                        download={`Surat Permohonan - ${email}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4"
                      >
                        <button className="bg-gradient-to-b from-gray-500 to-gray-600 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 shadow-gray-600/50 p-2 text-white flex items-center rounded-md">
                          <AiFillEye size={20} className="pr-1" /> Preview
                        </button>
                      </a>
                      }
                      </div>
                  </div>

                  <div className="w-full p-3">
                    <div className="text-start font-bold">
                      <h1>Indentitas (KTP, KK, SIM)</h1>
                    </div>
                    <div className="flex justify-between items-center mt-2 p-3 bg-slate-200">
                      {getExt(data[findData].identitas)}

                      {data[findData].identitas !== null &&
                        <a
                            href={data[findData].identitas}
                            download={`Surat Permohonan - ${email}`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4"
                        >
                            <button className="bg-gradient-to-b from-gray-500 to-gray-600 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 shadow-gray-600/50 p-2 text-white flex items-center rounded-md">
                            <AiFillEye size={20} className="pr-1" /> Preview
                            </button>
                        </a>
                      }
                    </div>
                  </div>

                  <div className="w-full p-3">
                    <div className="text-start font-bold">
                      <h1>SKCK </h1>
                    </div>
                    <div className="flex justify-between items-center mt-2 p-3 bg-slate-200">
                    {getExt(data[findData].skck)}

                      {data[findData].skck !== null &&
                      <a
                        href={data[findData].skck}
                        download={`Surat Permohonan - ${email}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4"
                      >
                        <button className="bg-gradient-to-b from-gray-500 to-gray-600 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 shadow-gray-600/50 p-2 text-white flex items-center rounded-md">
                          <AiFillEye size={20} className="pr-1" /> Preview
                        </button>
                      </a>
                      }
                      </div>
                  </div>

                  <div className="w-full p-3">
                    <div className="text-start font-bold">
                      <h1>Surat Keterangan Pegawai Kontrak </h1>
                    </div>
                    <div className="flex justify-between items-center mt-2 p-3 bg-slate-200">
                    {getExt(data[findData].sk_pegawai)}

                      {data[findData].sk_pegawai !== null &&
                      <a
                        href={data[findData].sk_pegawai}
                        download={`Surat Permohonan - ${email}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4"
                      >
                        <button className="bg-gradient-to-b from-gray-500 to-gray-600 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 shadow-gray-600/50 p-2 text-white flex items-center rounded-md">
                          <AiFillEye size={20} className="pr-1" /> Preview
                        </button>
                      </a>
                      }
                      </div>
                  </div>

                  <div className="w-full p-3">
                    <div className="text-start font-bold">
                      <h1>Surat Bebas Narkoba</h1>
                    </div>
                    <div className="flex justify-between items-center mt-2 p-3 bg-slate-200">
                    {getExt(data[findData].bebas_narkoba)}

                      {data[findData].bebas_narkoba !== null &&
                      <a
                        href={data[findData].bebas_narkoba}
                        download={`Surat Permohonan - ${email}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4"
                      >
                        <button className="bg-gradient-to-b from-gray-500 to-gray-600 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 shadow-gray-600/50 p-2 text-white flex items-center rounded-md">
                          <AiFillEye size={20} className="pr-1" /> Preview
                        </button>
                      </a>
                      }
                      </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button> */}
                  <button
                    className="bg-gradient-to-b from-blue-500 to-blue-600 hover:bg-gradient-to-b hover:from-blue-700 hover:to-blue-800 shadow-blue-600/50 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleVerifikasi(data[findData].id)}
                  >
                    Verifikasi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
