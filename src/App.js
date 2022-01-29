import "./App.css";
import { useState } from "react";
import Transaction from "./components/Transaction";

const Title = () => {
  const [dateCovide, setDateCovid] = useState([]);

  function getData() {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces")
      .then((resp) => resp.json())
      .then((data) => setDateCovid(data[0].txn_date));
  }
  setInterval(getData(), 60000);
  return (
    <div>
      <h1>โควิด 19</h1>
      <h3>{`ข้อมูลวันที่ : ` + dateCovide}</h3>
    </div>
  );
};

const SubTitle = () => {
  return <h3>แยกตามจังหวัด</h3>;
};
const Total = () => {
  const [totalData, setTotal] = useState({ totalDataNew: 0 });
  const [totalDataD, setTotalD] = useState({ totalDataRec: 0 });
  const [totalDataR, setTotalR] = useState({ totalDataDet: 0 });

  function getTotal() {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
      .then((res) => res.json())
      .then((data) => setTotal({ totalDataNew: data.at(-1).total_case }));
  }
  function getTotalD() {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
      .then((res) => res.json())
      .then((data) => setTotalD({ totalDataDet: data.at(-1).total_death }));
  }
  function getTotalR() {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
      .then((res) => res.json())
      .then((data) => setTotalR({ totalDataRec: data.at(-1).total_recovered }));
  }
  // getTotal()
  setInterval(getTotal(), getTotalD(), getTotalR(), 3600000);
  return (
    <div className="total-card">
      <span>{`ผู้ป่วยสะสม : ` + totalData.totalDataNew}</span>
      <span>{`เสียชีวิต : ` + totalDataD.totalDataDet}</span>
      <span>{`หายกลับบ้าน : ` + totalDataR.totalDataRec}</span>
    </div>
  );
};
function App() {
  return (
    <div className="card">
      <Title />
      <SubTitle />
      <Total />
      <Transaction />
    </div>
  );
}

export default App;
