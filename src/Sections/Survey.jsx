import React, { useEffect } from "react";
import Accordion from "../components/Accordion";
import BarChart from "../components/BarChart";
import BarChart2 from "../components/BarChart2";
import newData from "../assets/data.json";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import AreaChart from "../components/AreaChart";
// import axios from "axios";
// import ShapePieChart from "../components/ShapePieChart";
import {RiBarChart2Fill} from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { getDataSurvey } from "../store/actions/surveyAction";
import Loading from "../components/Loading";

const Survey = () => {
  const dispatch = useDispatch()
  const {data, total} = useSelector((state) => state.survey);
  const { loading } = useSelector((state) => state.miscellaneous);
  // const [dataChart, setDataChart] = useState([]);
  // const [dataChart2, setDataChart2] = useState([]);
  // const access_token = localStorage.getItem("token");

  // const getDataChart = async () => {
  //   const response = await axios.get(
  //     "https://www.backend.sultanbantilanairport.com/survey/report",
  //     {
  //       headers: {
  //         access_token: `${access_token}`,
  //       },
  //     }
  //   );
  //   setDataChart(response.data);
  // };

  // const getDataChart2 = async () => {
  //   // setLoadingApi(true);
  //   await axios({
  //     method: "GET",
  //     url: `https://www.backend.sultanbantilanairport.com/survey/report`,
  //     headers: {access_token: `${access_token}`,}
  //   })
  //     .then(({ response }) => {
  //   setDataChart2(response);
       
  //       })
  //     .catch((err) => {
  //      console.log(err);
  //     })
  //     .finally((_) => {
  //       // setLoadingApi(false);
  //     });
  // }
   
const COLORS_GENDER= ['#0088FE', '#00C49F'];
const COLORS_PETUGAS= ['#0088FE', '#FB2B2B'];

  useEffect(() => {
    // getDataChart();
    // getDataChart2();
    dispatch(getDataSurvey())
  // eslint-disable-next-line
  }, []);
  if (loading) {
    return <Loading />
  } else {
    return (
      <div className="p-10">
        { 
        data &&
          <>
        <Accordion
          title="KUALITAS PELAYANAN"
          content={<BarChart data={data.kualitasPelayanan} setAngle={-45} anchor="end"/>}
          bgColor="bg-gray-100"
          icons={<RiBarChart2Fill className="ml-3"/>}
        />
        <Accordion
          title="PERILAKU PENYIMPANGAN PELAYANAN"
          content={ 
            <BarChart
              data={data.penyimpanganPelayanan}
              setAngle={0}
              anchor="middle"
            />
          }
          bgColor="bg-gray-100"
          icons={<RiBarChart2Fill className="ml-3"/>}
        />
        <Accordion
          title="PROFIL RESPONDEN"
          content={
            <>
            <div className="">
                <LineChart data={data.usia} title="USIA"/>
            </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 justify-center xl:justify-between gap-y-10">
                <PieChart
                  data={data.jenisKelamin}
                  title="JENIS KELAMIN"
                  className="text-center font-bold"
                  COLORS={COLORS_GENDER}
                />
                <AreaChart title="PENDIDIKAN" data={data.pendidikan}/>
              </div>
            </>
          }
          bgColor="bg-gray-100"
          icons={<RiBarChart2Fill className="ml-3"/>}
        />
        <Accordion
          title="LAIN-LAIN"
          content={
            <>
              <div className="grid grid-cols-1 justify-between gap-y-10">
              <PieChart data={data.pengarahanPetugas} title="PENGARAHAN PETUGAS" COLORS={COLORS_PETUGAS}/>
                <BarChart2 data={data.perbaikan} title="PERBAIKAN" setAngle={-45} anchor="end"/>
              </div>
            </>
          }
          bgColor="bg-gray-100"
          icons={<RiBarChart2Fill className="ml-3"/>}
        />
        </>
      }
      </div>
    );
  }
};

export default Survey;
