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
  const [totalData, setTotal] = useState([]);
  const [totalDataD, setTotalD] = useState([]);
  const [totalDataR, setTotalR] = useState([]);

  function getTotal() {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
      .then((res) => res.json())
      .then((data) => setTotal(data[data.length -1 ].total_case));
  }
  function getTotalD() {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
      .then((res) => res.json())
      .then((data) => setTotalD(data[data.length -1 ].total_death));
  }
  function getTotalR() {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
      .then((res) => res.json())
      .then((data) => setTotalR(data[data.length -1 ].total_recovered));
  }
  // getTotal()
  setInterval(getTotal(), getTotalD(), getTotalR(), 3600000);
  return (
    <div className="total-card">
      <span>{`ผู้ป่วยสะสม : ` + totalData}</span>
      <span>{`เสียชีวิต : ` + totalDataD}</span>
      <span>{`หายกลับบ้าน : ` + totalDataR}</span>
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
