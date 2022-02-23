import Item from "./Item";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Transaction = () => {
  const [dataCovide, setDataCovid] = useState([]);

  function getData() {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces")
      .then((resp) => resp.json())
      .then((data) => setDataCovid(data));
  }
  setInterval(getData(), 3600000);

  return (
    <ul>
      <li className="list-item-header">
        <span>จังหวัด</span>
        <span>ผู้ติดเชื้อรายใหม่</span>
        <span>ผู้ป่วยสะสม</span>
        <span>เสียชีวิต</span>
        <span>เสียชีวิตสะสม</span>
      </li>
      {dataCovide.map((e) => {
        return (
          <Item
            new_case={e.new_case}
            new_death={e.new_death}
            province={e.province}
            total_case={e.total_case}
            total_death={e.total_death}
            key={uuidv4()}
          />
        );
      })}
    </ul>
  );
};

export default Transaction;
