import "./complete.css";
import { useContext } from "react";
import { CourseContext } from "../../Context/usecontext";
import { Link } from "react-router-dom";
import { Sidebar } from "../sidebar/sidebar";

export const Complete = () => {
  const { courselist } = useContext(CourseContext);

  const completedCourses = courselist.filter(
    (course) => course.isComplete
  );

  return (
    <div className="complete-page">
      <h1 className="complete-title">
        <Sidebar></Sidebar>
        ✅ Completed Courses
      </h1>

      {completedCourses.length === 0 ? (
        <p className="empty-message">
          هیچ دوره‌ای تکمیل نشده است
        </p>
      ) : (
        <div className="completed-list">
          {completedCourses.map((course) => (
            <div
              key={course.id}
              className="completed-card"
            >
              <h3 className="completed-name">
                {course.courseName}
              </h3>
            </div>
          ))}
        </div>
      )}
      <Link to={"/"}><button className="Home">go home</button></Link>
    </div>
  );
};