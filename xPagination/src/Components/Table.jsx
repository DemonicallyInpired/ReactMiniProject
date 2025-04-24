import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { v4 } from "uuid";
import Pagination from "./Pagination";
import "./Table.css";
export default function Table({ nPageItem }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const consumeableResponse = response.data;
        setData(consumeableResponse);
      } catch (err) {
        window.alert("failed to fetch data");
        return null;
      }
    };
    fetchData();
  }, []);
  const keys = useMemo(() => {
    return data.length > 0 ? Object.keys(data[0]) : [];
  }, [data]);
  return (
    <div id="table__container">
      <h1>Employee Data Table</h1>
      <table>
        <thead>
          <tr>
            {keys.map((item, index) => (
              <th key={`tableHeader-${index}`}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data
            .slice(
              nPageItem * page,
              Math.min(data.length, nPageItem * (page + 1)),
            )
            .map((item, index) => {
              return (
                <tr key={`tableRow-${v4()}`}>
                  {keys.map((keyVal, index1) => {
                    return <td key={`tableValue-${v4()}`}>{item[keyVal]}</td>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination
        nPage={nPageItem}
        maxLen={Math.floor(data.length / nPageItem)}
        currIndex={page}
        setterIndex={setPage}
      />
    </div>
  );
}
