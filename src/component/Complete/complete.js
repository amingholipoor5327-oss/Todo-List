import { useContext } from "react";
import { CourseContext } from "../../Context/usecontext";
export const Complete = () => {
  const { courselist } = useContext(CourseContext);

  const completedCourses = courselist.filter(
    (course) => course.isComplete
  );

  return (
    <div>
      <h1>✅ Completed Courses</h1>

      {completedCourses.length === 0 ? (
        <p>هیچ دوره‌ای تکمیل نشده است</p>
      ) : (
        completedCourses.map((course) => (
          <div key={course.id}>
            <h3>{course.courseName}</h3>
          </div>
        ))
      )}
    </div>
  );
};