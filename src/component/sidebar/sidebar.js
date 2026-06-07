import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CourseContext } from "../../Context/usecontext";
import "./sidebar.css";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { courselist } = useContext(CourseContext);

  const completedCount = courselist.filter(
    (course) => course.isComplete
  ).length;

  return (
    <> //React.fragment
      <button
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Dashboard</h2>

        <p>📚 Total: {courselist.length}</p>
        <p>✅ Complete: {completedCount}</p>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/complete">
              Complete
            </Link>
          </li>

          <li>
            <Link to="/delete">
              Delete
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};