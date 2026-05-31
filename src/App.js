import "./App.css";
import { useState } from "react";

function App() {
  const [courselist, setCourselist] = useState([]);
  const [newcourse, setNewcourse] = useState("");

  const handleInput = (e) => {
    setNewcourse(e.target.value);
  };

  const addCourse = () => {
    if (newcourse.trim() === "") {
      alert("لطفاً نام دوره را وارد کنید");
      return;
    }

    const course = {
      id: courselist.length === 0 ? 1 : courselist[courselist.length - 1].id + 1,
      courseName: newcourse,
      isComplete: false
    };
    setCourselist([...courselist, course]);
    setNewcourse("");
  };

   const deleteCourse = (courseId) => {
    setCourselist(courselist.filter((course) => course.id !== courseId));
    };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="type..."
          value={newcourse}
          onChange={handleInput}
        />
        <button onClick={addCourse}>Add Course</button>
      </div>

      {courselist.map((course) => (
        <div key={course.id}>
          <h1>{course.courseName}</h1>
          <button onClick={() => deleteCourse(course.id)}>❌ Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;