/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ResultList from "../conponents/reault/list";
import { Image } from "primereact/image";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import CSVReader from "react-csv-reader";

const TIndex = () => {
  const [n1, setN1] = React.useState();
  const [n2, setN2] = React.useState();
  const [n3, setN3] = React.useState();
  const [n4, setN4] = React.useState();
  const [times, setTimes] = React.useState({
    n1: null,
    n2: null,
    n3: null,
    n4: null,
  });
  const [data, setData] = React.useState([]);
  const [customers, setCustomers] = React.useState([]);
  const fileInputRef = React.useRef(null);
  const parseCSVData = (csvData) => {
    const rows = csvData.split("\n");
    const headers = rows[0].split(",");
    const results = [];

    for (let i = 1; i < rows.length; i++) {
      const values = rows[i].split(",");
      const obj = {};

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = values[j];
      }

      results.push(obj);
    }

    return results;
  };
  const onChangeData = (data) => {
    const resultData = [];
    data &&
      data.map((element, index) => {
        if (element.number) {
          const result = {};
          result.no = index + 1;
          result.number = element.number;
          result.name = element.fname + " " + element.lname;
          resultData.push(result);
        }
      });
    return resultData;
  };
  React.useEffect(() => {
    const intervalId1 = setInterval(() => {
      const randomNum1 = Math.floor(Math.random() * 10);
      setN1(randomNum1);
    }, 1000);

    const intervalId2 = setInterval(() => {
      const randomNum2 = Math.floor(Math.random() * 10);
      setN2(randomNum2);
    }, 900);

    const intervalId3 = setInterval(() => {
      const randomNum3 = Math.floor(Math.random() * 10);
      setN3(randomNum3);
    }, 800);

    const intervalId4 = setInterval(() => {
      const randomNum4 = Math.floor(Math.random() * 10);
      setN4(randomNum4);
    }, 700);

    setTimes({
      n1: intervalId1,
      n2: intervalId2,
      n3: intervalId3,
      n4: intervalId4,
    });
  }, []);
  return (
    <div
      className=" w-full grid gap-1 grid-cols-12"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <div className=" result desktop:col-span-3 laptop:col-span-4 tablet:col-span-4 h-full">
        <div className=" w-full flex-grow p-2 h-full">
          <div className=" result-space w-full h-full">
            <ResultList
              title="PREVIOUS RESULT"
              list={[
                {
                  number: "7515",
                  fname: "lucas",
                  lname: "gerold",
                  date: "2023.05.02 12:00:00",
                },
                {
                  number: "9584",
                  fname: "Julia",
                  lname: "Cooper",
                  date: "2023.05.02 12:00:00",
                },
                {
                  number: "5825",
                  fname: "Caslras",
                  lname: "fewf",
                  date: "2023.05.02 12:00:00",
                },
                {
                  number: "0128",
                  fname: "Donald",
                  lname: "Nixon",
                  date: "2023.05.02 12:00:00",
                },
                {
                  number: "9528",
                  fname: "Kurt",
                  lname: "Keating",
                  date: "2023.05.02 12:00:00",
                },
                {
                  number: "1452",
                  fname: "Jack",
                  lname: "Jenkinson",
                  date: "2023.05.02 12:00:00",
                },
                {
                  number: "3570",
                  fname: "Edward",
                  lname: "Wright",
                  date: "2023.05.02 12:00:00",
                },
                {
                  number: "9607",
                  fname: "Caslras",
                  lname: "fewf",
                  date: "2023.05.02 12:00:00",
                },
                {
                  number: "3852",
                  fname: "Jerry",
                  lname: "fewf",
                  date: "2023.05.02 12:00:00",
                },
                {
                  number: "6852",
                  fname: "Hannah",
                  lname: "Gilray",
                  date: "2023.05.02 12:00:00",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="desktop:col-span-9 laptop:col-span-8 col-span-12 tablet:col-span-8 flex flex-col justify-center">
        <div className="w-full flex-grow p-2">
          <div className="draw_number w-full h-full flex flex-col border-solid rounded-3xl border-2">
            <div className=" w-full flex-grow">
              <div className="w-full h-full flex flex-1 justify-center gap-2 m-auto p-3">
                <div className=" text-center justify-center relative inset-x-0">
                  <div className="relative flex items-center justify-center">
                    <p className="random-number absolute">{n1}</p>
                    <img
                      src="assets/images/golf_ball.png"
                      className="logo_img golf_img"
                    />
                  </div>
                </div>
                <div className=" text-center justify-center relative inset-x-0">
                  <div className="relative flex items-center justify-center">
                    <p className="random-number absolute">{n2}</p>
                    <img
                      src="assets/images/golf_ball.png"
                      className="logo_img golf_img"
                    />
                  </div>
                </div>
                <div className=" text-center justify-center relative inset-x-0">
                  <div className="relative flex items-center justify-center">
                    <p className="random-number absolute">{n3}</p>
                    <img
                      src="assets/images/golf_ball.png"
                      className="logo_img golf_img"
                    />
                  </div>
                </div>
                <div className=" text-center justify-center relative inset-x-0">
                  <div className="relative flex items-center justify-center">
                    <p className="random-number absolute">{n4}</p>
                    <img
                      src="assets/images/golf_ball.png"
                      className="logo_img golf_img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-2 flex justify-center">
              <button
                className=" draw_btn inset-x-0 m-auto pt-1 pb-1 pl-20 pr-20 desktop:w-1/2 laptop:w-2/3 tablet:w-full w-full bg-mainColor"
                onClick={async () => {
                  for (let i = 0; i <= times.n4; i++) {
                    clearInterval(i);
                  }
                  const intervalId1 = setInterval(() => {
                    const randomNum1 = Math.floor(Math.random() * 10);
                    setN1(randomNum1);
                  }, 10);
                  const intervalId2 = setInterval(() => {
                    const randomNum2 = Math.floor(Math.random() * 10);
                    setN2(randomNum2);
                  }, 9);

                  const intervalId3 = setInterval(() => {
                    const randomNum3 = Math.floor(Math.random() * 10);
                    setN3(randomNum3);
                  }, 8);

                  const intervalId4 = setInterval(() => {
                    const randomNum4 = Math.floor(Math.random() * 10);
                    setN4(randomNum4);
                  }, 7);
                  setTimeout(() => {
                    clearInterval(intervalId1);
                    setTimeout(() => {
                      clearInterval(intervalId2);
                      setTimeout(() => {
                        clearInterval(intervalId3);
                        setTimeout(() => clearInterval(intervalId4), 3000);
                      }, 3000);
                    }, 3000);
                  }, 3000);
                }}
              >
                DRAW NUMBER
              </button>
            </div>
          </div>
        </div>
        <div className=" list-title-place w-full p-2">
          <div className=" list_title w-full pl-6">List</div>
          <div className=" list-table w-full p-1">
            <div className=" w-full flex gap-3">
              <Button
                style={{ backgroundColor: "#29576e" }}
                onClick={() => {}}
                className=" flex-none"
              >
                Clear
              </Button>
              <div className="flex-1">
                <span className="p-input-icon-left float-right">
                  <i className="pi pi-search" />
                  <InputText placeholder="Search" className="input_field" />
                </span>
              </div>
              <Button
                style={{ backgroundColor: "#29576e" }}
                onClick={() => {
                  fileInputRef.current.click();
                }}
                className=" flex-none"
              >
                Open
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(event) => {
                  const file = event.target.files[0];
                  const path = URL.createObjectURL(file);
                  fetch(path)
                    .then((response) => response.blob())
                    .then((blob) => {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        const csvData = e.target.result;
                        const parsedData = parseCSVData(csvData);
                        setData(parsedData);
                      };
                      reader.readAsText(blob);
                    });
                }}
              />
            </div>
            <div className=" w-full pt-1">
              <DataTable
                value={onChangeData(data)}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: "50rem" }}
              >
                <Column
                  field="no"
                  header="No"
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  field="number"
                  header="Number"
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  field="name"
                  header="Name"
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  field="date"
                  header="Date"
                  style={{ width: "25%" }}
                ></Column>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TIndex;
