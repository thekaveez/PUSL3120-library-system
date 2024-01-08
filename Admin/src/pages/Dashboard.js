import {
  faBook,
  faClipboardCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [bookCount, setBookCount] = useState(null);
  const [setError] = useState(null);
  const [studentsCount, setStudentsCount] = useState(null);
  const [issuedCount, setIssuedCount] = useState(null);

  //book count
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
  });

  //student count
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
  });

  //issued count
  useEffect(() => {
    const fetchIssuedCount = async () => {
      try {
        const response = await fetch("/api/issuedbooks/issuedCount");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setIssuedCount(data.count);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchIssuedCount();
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <td>
          <tr>
            <div className="word-box1">
              <p>
                <FontAwesomeIcon icon={faUsers} />
                <br></br>Students Count: {studentsCount}
              </p>
            </div>
          </tr>
        </td>
        <td>
          <tr>
            <div className="word-box2">
              <p>
                <FontAwesomeIcon icon={faBook} /> <br></br>Book Count:{" "}
                {bookCount}
              </p>
            </div>
          </tr>
        </td>
        <td>
          <tr>
            <div className="word-box3">
              <p>
                <FontAwesomeIcon icon={faClipboardCheck} />
                <br></br>Issued : {issuedCount}
              </p>
            </div>
          </tr>
        </td>
      </table>
    </div>
  );
};

export default Dashboard;
