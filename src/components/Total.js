import { useState } from "react";
const Total = () => {
  const [totalData, setTotal] = useState([]);
  const [totalDataD, setTotalD] = useState([]);
  const [totalDataR, setTotalR] = useState([]);

  function getTotal() {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
      .then((res) => res.json())
      .then((data) => setTotal(data[data.length - 1].total_case));
  }
  function getTotalD() {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
      .then((res) => res.json())
      .then((data) => setTotalD(data[data.length - 1].total_death));
  }
  function getTotalR() {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
      .then((res) => res.json())
      .then((data) => setTotalR(data[data.length - 1].total_recovered));
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

export default Total;
