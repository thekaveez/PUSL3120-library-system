import { useEffect, useState } from "react";

const Dashboard = () => {
  const [bookCount, setBookCount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookCount = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/books/bookCount"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBookCount(data.count);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBookCount();
  }, []);

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
