import { useContext } from "react/cjs/react.development";
import AddEntryContext from "../components/context/Add-entryContext";
import Header from "../components/Header";

const Home = (props) => {
  const {
    state: { entries },
  } = useContext(AddEntryContext);

  return (
    <div className="place-content-center m-auto relative w-5/6 ">
      <Header name="Dashbord" />
      <div className="">
        <table className="border-collapse w-full  border border-gray-500 ...">
          <thead>
            <tr>
              <th className="border border-gray-600 ..."> OUTCOMING</th>
              <th className="border border-gray-600 ..."> INCOMING</th>
            </tr>
          </thead>
          <tbody>
            {[
              props.data.map(({ id, value, message }) =>
                value >= 0 ? (
                  <tr key={id} className="text-right">
                    <td className="border border-gray-400 ..."></td>
                    <td className="border border-gray-400 text-green-600 ...">
                      {value}$
                      <br />
                      <span>{message}</span>
                    </td>
                  </tr>
                ) : (
                  <tr key={id} className="text-red-600 text-right">
                    <td className="border border-gray-400  ...">
                      {value}$
                      <br />
                      <span>{message}</span>
                    </td>
                    <td className="border  border-gray-400 ..."></td>
                  </tr>
                )
              ),
            ]}

            {map(([{ value, message }]) =>
              value > 0 ? (
                <tr key="" className="text-right">
                  <td className="border border-gray-400 ..."></td>
                  <td className="border border-gray-400 text-green-600 ...">
                    {value}
                    <br />
                    <span>{message}</span>
                  </td>
                </tr>
              ) : (
                <tr key="" className="text-red-600 text-right">
                  <td className="border border-gray-400  ...">
                    {value}
                    <br />
                    <span>{message}</span>
                  </td>
                  <td className="border  border-gray-400 ..."></td>
                </tr>
              )
            )}

            <tr className="text-red-600 text-right">
              <td className="border border-gray-400 ...">Total : </td>
              <td className="border border-gray-400 ...">Total : </td>
            </tr>
            <tr className="text-red-600  ">
              <div>
                <span> Result : </span>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
