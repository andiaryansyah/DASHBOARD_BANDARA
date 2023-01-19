import React, { useEffect, useState } from "react";
import Accordion from "../components/Accordion";
import BarChart from "../components/BarChart";
import BarChart2 from "../components/BarChart2";
import newData from "../assets/data.json";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import AreaChart from "../components/AreaChart";
import axios from "axios";
// import ShapePieChart from "../components/ShapePieChart";
import { RiBarChart2Fill } from "react-icons/ri";
import Loading from "../components/Loading";

const Survey = () => {
  const [dataChart, setDataChart] = useState([]);
  const access_token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const getDataChart = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://www.backend.sultanbantilanairport.com/survey/report",
      {
        headers: {
          access_token: `${access_token}`,
        },
      }
    );
    setDataChart(response.data);
    setLoading(false);
  };

  const COLORS_GENDER = ["#0088FE", "#00C49F"];
  const COLORS_PETUGAS = ["#0088FE", "#FB2B2B"];

  useEffect(() => {
    getDataChart();
    // eslint-disable-next-line
  }, []);

  // console.log('NEW DATA', dataChart.result);
  // console.log('DATA', newData);
  return (
    <div className="p-10">
      {loading ? (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        dataChart &&
        dataChart.result !== undefined && (
          <>
            <div className="py-7 px-10 bg-gray-100 mb-5 flex justify-around">
              <div className="p-5 text-center  w-5/12">
                <p className="font-semibold text-gray-500 text-base xl:text-lg">SURVEI KEPUASAN MASYARAKAT DAN PERSEPSI ANTI KORUPSI</p>
                <p className="font-semibold text-gray-600 text-lg xl:text-2xl">KEMENTERIAN PERHUBUNGAN <br/> UPBU KELAS I SIS AL JUFRI</p>
              </div>
              <div className="grid grid-cols-2 items-center gap-x-4 gap-y-5 text-center">
                <div className="py-6 xl:py-7 px-10 bg-sky-500 font-semibold text-gray-100 rounded-lg  text-center">
                  <p className="text-xs xl:text-lg">KUALITAS <br/>PELAYANAN</p>
                  <br className="xl:hidden"/>
                  <p className="text-xs xl:text-lg mb-1">(IKM)</p>
                  <p className="text-xs xl:text-3xl">15.95/17.50</p>
                </div>
                <div className="py-7 px-10 bg-sky-500 font-semibold text-gray-100 rounded-lg  text-center">
                  <p className="text-xs xl:text-lg">
                    PERILAKU PENYIMPANGAN
                    <br /> PELAYANAN
                  </p>
                  <p className="text-xs xl:text-lg mb-1">(IPK)</p>
                  <p className="text-xs xl:text-3xl">15.95/17.50</p>
                </div>
                <div className="py-10 px-8 bg-cyan-500 font-semibold text-gray-100 rounded-lg  text-right">
                  <p className="text-base xl:text-lg">RESPONDEN</p>
                  <p className="text-lg xl:text-3xl">36</p>
                </div>
              </div>
            </div>
            <Accordion
              title="KUALITAS PELAYANAN"
              content={
                <BarChart
                  data={dataChart.result.kualitasPelayanan}
                  setAngle={-45}
                  anchor="end"
                />
              }
              bgColor="bg-gray-100"
              icons={<RiBarChart2Fill className="ml-3" />}
            />
            <Accordion
              title="PERILAKU PENYIMPANGAN PELAYANAN"
              content={
                <BarChart
                  data={dataChart.result.penyimpanganPelayanan}
                  setAngle={0}
                  anchor="middle"
                />
              }
              bgColor="bg-gray-100"
              icons={<RiBarChart2Fill className="ml-3" />}
            />
            <Accordion
              title="PROFIL RESPONDEN"
              content={
                <>
                  <div className="">
                    <LineChart data={dataChart.result.usia} title="USIA" />
                  </div>
                  <div className="grid grid-cols-1 xl:grid-cols-2 justify-center xl:justify-between gap-y-10">
                    <PieChart
                      data={dataChart.result.jenisKelamin}
                      title="JENIS KELAMIN"
                      className="text-center font-bold"
                      COLORS={COLORS_GENDER}
                    />
                    <AreaChart
                      title="PENDIDIKAN"
                      data={dataChart.result.pendidikan}
                    />
                  </div>
                </>
              }
              bgColor="bg-gray-100"
              icons={<RiBarChart2Fill className="ml-3" />}
            />
            <Accordion
              title="LAIN-LAIN"
              content={
                <>
                  <div className="grid grid-cols-1 justify-between gap-y-10">
                    <PieChart
                      data={dataChart.result.pengarahanPetugas}
                      title="PENGARAHAN PETUGAS"
                      COLORS={COLORS_PETUGAS}
                    />
                    <BarChart2
                      data={dataChart.result.perbaikan}
                      title="PERBAIKAN"
                      setAngle={-45}
                      anchor="end"
                    />
                  </div>
                </>
              }
              bgColor="bg-gray-100"
              icons={<RiBarChart2Fill className="ml-3" />}
            />
          </>
        )
      )}
    </div>
  );
};

export default Survey;
