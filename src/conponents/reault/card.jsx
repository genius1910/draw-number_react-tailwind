import Moment from "react-moment";

const ResultCard = ({ number, name, date }) => {
  return (
    <div className=" result-card">
      <p className=" number">{number}</p>
      <div className=" w-full text-center name">
        <p className=" name">{name}</p>
      </div>
      <p className=" date">
        <Moment format="DD.MM.YYYY HH:mm:ss">{date}</Moment>
      </p>
    </div>
  );
};

export default ResultCard;
