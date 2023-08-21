/* eslint-disable array-callback-return */

import ResultCard from "./card";

const ResultList = ({ title, list }) => {
  return (
    <>
      <div className=" text-center">
        <p className=" result-title">{title}</p>
      </div>
      <hr className=" ml-2 mr-2 outline-result w-f" />
      <div className=" result-list w-full">
        {list &&
          list.map((element, index) => {
            return (
              <ResultCard
                key={index}
                number={element.number}
                name={element.fname + " " + element.lname}
                date={element.date}
              />
            );
          })}
      </div>
    </>
  );
};

export default ResultList;
