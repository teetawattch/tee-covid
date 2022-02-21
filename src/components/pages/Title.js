import { useState } from "react";
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
      <h3>แยกตามจังหวัด</h3>
    </div>
  );
};

export default Title;
