const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <td>
          <tr>
            <div className="word-box1">
              <p>Student</p>
            </div>
          </tr>
        </td>
        <td>
          <tr>
            <div className="word-box2">
              <p>Books</p>
            </div>
          </tr>
        </td>
        <td>
          <tr>
            <div className="word-box3">
              <p>Issued</p>
            </div>
          </tr>
        </td>
      </table>
    </div>
  );
};

export default Dashboard;