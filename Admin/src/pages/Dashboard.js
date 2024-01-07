import { useEffect, useState } from "react";

const Dashboard = () => {
  const [bookCount, setBookCount] = useState(null);
  const [error, setError] = useState(null);
  const [studentsCount, setStudentsCount] = useState(null);

  useEffect(() => {
    const fetchBookCount = async () => {
      try {
        const response = await fetch("/api/books/bookCount");
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

  useEffect(() => {
    const fetchStudentsCount = async () => {
      try {
        const response = await fetch("/api/students/studentsCount");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setStudentsCount(data.count);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchStudentsCount();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <td>
          <tr>
            <div className="word-box1">
              <p>Students Count : {studentsCount}</p>
            </div>
          </tr>
        </td>
        <td>
          <tr>
            <div className="word-box2">
              <p>Book Count : {bookCount}</p>
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
