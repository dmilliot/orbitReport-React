const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>type</th>
          <th>launch date</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((data,id) => {
          return(
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default Table;