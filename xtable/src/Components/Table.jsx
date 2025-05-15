import { useState, useEffect } from "react";
import data from "../Utils/data.json";
import styles from "./Table.module.css";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [{ sortedByDate, sortedByView }, setSorted] = useState({
    sortedByDate: false,
    sortedByView: false,
  });
  useEffect(() => {
    setTableData(() => {
      return data.map((item) => {
        const { date } = item;
        item["dateMs"] = new Date(date).valueOf();
        return item;
      });
    });
  }, []);
  const handlesortByDate = () => {
    if (sortedByDate) {
      return;
    }
    setTableData((prevData) => {
      const newData = [...prevData].sort((a, b) => {
        if (a.dateMs === b.dateMs) {
          return b.views - a.views;
        }
        return b.dateMs - a.dateMs;
      });
      return newData;
    });
    setSorted((prevState) => {
      return { ...prevState, sortedByDate: true };
    });
  };
  const handleSortByViews = () => {
    if (sortedByView) {
      return;
    }
    setTableData((prevState) => {
      return [...prevState].sort((a, b) => {
        if (a.views !== b.views) {
          return b.views - a.views;
        }
        return b.dateMs - a.dateMs;
      });
    });
    setSorted((prevState) => {
      return { ...prevState, sortedByView: true };
    });
  };
  console.log("tableData", tableData);
  return (
    <div style={{ padding: "0rem 1rem" }}>
      <h1>Date and Views Table</h1>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          minWidth: "20vw",
          padding: "1rem",
        }}
      >
        <button disabled={sortedByDate} onClick={handlesortByDate}>
          Sort by Date
        </button>
        <button disabled={sortedByView} onClick={handleSortByViews}>
          Sort by Views
        </button>
      </div>
      <table className={styles.tableContent}>
        <thead>
          <tr>
            <th>Date</th>
            <th>View</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            const { date, views, article } = item;
            return (
              <tr key={`tableContent-${index}`}>
                <td>{date}</td>
                <td>{views}</td>
                <td>{article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
