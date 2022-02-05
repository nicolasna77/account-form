const Operations = () => {
  const data = [
    {
      id: 1,
      value: 3000,
      message: "Braquage ",
    },
    {
      id: 2,
      value: 200,
      message: "Achat lecler",
    },
    {
      id: 3,
      value: -1000,
      message: "Paye du mois",
    },
  ];

  let result = data.reduce((ab, { value }) => {
    ab = ab + value;
    return ab;
  }, 0);

  let countOut = data.reduce((ac, { value }) => {
    ac = ac - (value < 0);
    return ac;
  }, 0);

  let countIn = data.reduce((acc, { value }) => {
    acc = acc + (value > 0);
    return acc;
  }, 0);

  return (
    <div className="">
      <table className="border-collapse w-full  border border-gray-500 ...">
        <thead>
          <tr>
            <th className="border border-gray-600 ...">out</th>
            <th className="border border-gray-600 ...">in</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) =>
            data.value > 0 ? (
              <tr key={data.id} className="text-right">
                <td className="border border-gray-400 ..."></td>
                <td className="border border-gray-400 text-green-600 ...">
                  {data.value}
                  <br />
                  <span>{data.message}</span>
                </td>
              </tr>
            ) : (
              <tr key={data.id} className="text-red-600 text-right">
                <td className="border border-gray-400  ...">
                  {data.value}
                  <br />
                  <span>{data.message}</span>
                </td>
                <td className="border  border-gray-400 ..."></td>
              </tr>
            )
          )}

          <tr key={data.id} className="text-red-600 text-right">
            <td className="border border-gray-400 ...">Total : {countOut}</td>
            <td className="border border-gray-400 ...">Total : {countIn}</td>
          </tr>
          <tr key={data.id} className="text-red-600  ">
            <div>
              <span> Result : </span>
              {result}
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Operations;
