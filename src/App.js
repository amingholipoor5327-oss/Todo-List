import "./App.css";
import { useEffect, useState } from "react";
import { Course } from "./component/Course/course";
function App() {

const [courselist, setCourselist] = useState(() => {
  
  const saved = localStorage.getItem("course");
  return saved ? JSON.parse(saved) : [];
});

  const [newcourse, setNewcourse] = useState("");

useEffect(() => {
  console.log("saving:", courselist);
  localStorage.setItem("course", JSON.stringify(courselist));
}, [courselist]);
  


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



  const Iscomplate = (ID) => {
    const newCourselist = courselist.map((course) => {
      if (course.id === ID) {
        return { ...course, isComplete: !course.isComplete };
      }
      return course;
    });
    setCourselist(newCourselist);
  };



  return (
    <div className="App">
      <h1>📚 مدیریت دوره‌ها</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="نام دوره..."
          value={newcourse}
          onChange={handleInput}
        />
        <button onClick={addCourse}>➕ افزودن</button>
      </div>

      {courselist.length === 0 ? (
        <div className="empty">هیچ دوره‌ای ثبت نشده است</div>
      ) : (
        courselist.map((course) => (
          <Course
            key={course.id}
            course={course}
            deleteCourse={deleteCourse}
            Iscomplate={Iscomplate}
          />
        ))
      )}

      <button className="complate">Complate</button>
      <button className="Delete">Delete</button>
    </div>
  );
}

export default App;