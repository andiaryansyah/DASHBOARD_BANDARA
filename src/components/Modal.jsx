import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IoMdDownload } from "react-icons/io";
import JPEG from "../assets/jpeg.svg";
import PDF from "../assets/pdf.svg";

const Modal = ({ email }) => {
  const { data } = useSelector((state) => state.pasbandara);
  const [showModal, setShowModal] = useState(false);

  const findData = data.findIndex((item) => item.email === email);

//   function getExtension(filename) {
//     return filename.split(".").pop();
//   }

  function getExt(filename) {
    if (filename === null ) {
        return <p className="py-3 px-1">Tidak ada File</p>
    } else {
    let filter = filename.split(".").pop();

    if (filter.toLowerCase() === "pdf") {
        return <img src={PDF} alt="pdf" />
    } else {
        return <img src={JPEG} alt="jpg" />
    }
}
  }

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-xxs font-semibold py-2 px-2 rounded-sm m-auto"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Detail
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-5xl overflow-y-auto h-5/6">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
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
                <div className="relative p-6">

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
                        <button className="bg-blue-500 hover:bg-blue-700 p-2 text-white flex rounded-md">
                          <IoMdDownload size={20} className="pr-1" /> Preview
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
                        <button className="bg-blue-500 hover:bg-blue-700 p-2 text-white flex rounded-md">
                          <IoMdDownload size={20} className="pr-1" /> Preview
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
                        <button className="bg-blue-500 hover:bg-blue-700 p-2 text-white flex rounded-md">
                          <IoMdDownload size={20} className="pr-1" /> Preview
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
                        <button className="bg-blue-500 hover:bg-blue-700 p-2 text-white flex rounded-md">
                          <IoMdDownload size={20} className="pr-1" /> Preview
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
                            <button className="bg-blue-500 hover:bg-blue-700 p-2 text-white flex rounded-md">
                            <IoMdDownload size={20} className="pr-1" /> Preview
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
                        <button className="bg-blue-500 hover:bg-blue-700 p-2 text-white flex rounded-md">
                          <IoMdDownload size={20} className="pr-1" /> Preview
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
                        <button className="bg-blue-500 hover:bg-blue-700 p-2 text-white flex rounded-md">
                          <IoMdDownload size={20} className="pr-1" /> Preview
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
                        <button className="bg-blue-500 hover:bg-blue-700 p-2 text-white flex rounded-md">
                          <IoMdDownload size={20} className="pr-1" /> Preview
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
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
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
