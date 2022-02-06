import AddEntryContext from "../components/context/Add-entryContext";
import Header from "../components/Header";
import { useContext } from "react";

const Home = () => {
  const { state } = useContext(AddEntryContext);
  const data = state;

  const countOut = data
    .filter((x) => x.value < 0)
    .reduce((ac, { value }) => ac + parseInt(value), 0);

  const countIn = data
    .filter((x) => x.value > 0)
    .reduce((ac, { value }) => ac + parseInt(value), 0);

  const result = countIn + countOut;
  return (
    <div className="place-content-center m-auto relative w-5/6 ">
      <Header name="Dashbord" />
      <div className="">
        <table className="border-collapse w-full  border border-gray-500 ...">
          <thead>
            <tr>
              <th className="border border-gray-600 "> OUTCOMING</th>
              <th className="border border-gray-600"> INCOMING</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([id, { value, message }]) =>
              value > 0 ? (
                <tr key={id} className="tableData text-right">
                  <td className="border border-gray-400 "></td>
                  <td className="border border-gray-400 text-green-600">
                    {value}
                    <br />
                    <span>{message}</span>
                  </td>
                </tr>
              ) : (
                <tr key={id} className="tableData text-red-600 text-right">
                  <td className="border border-gray-400 ">
                    {value}
                    <br />
                    <span>{message}</span>
                  </td>
                  <td className="border  border-gray-400 "></td>
                </tr>
              )
            )}
            <tr className="text-right">
              <td className="border text-red-600 border-gray-400 ">
                Total : {countOut}
              </td>
              <td className="border text-green-600 border-gray-400 ">
                Total : {countIn}
              </td>
            </tr>
            {result < 0 ? (
              <tr className="text-red-600  ">
                <div>
                  <span> Result : </span>
                  {result}
                </div>
              </tr>
            ) : (
              <tr className="text-green-600  ">
                <div>
                  <span> Result : </span>
                  {result}
                </div>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
