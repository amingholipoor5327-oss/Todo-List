import "./App.css";
import { useEffect, useState , useContext } from "react";
import { Course } from "./component/Course/course";
import { Delete } from "./component/Delete/delete";
import { Complete } from "./component/Complete/complete";
 import { CourseContext } from "./Context/usecontext";
function App() {
 const {courselist , setCourselist} = useContext(CourseContext)


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
      id: Date.now(),
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

      <Complete className="complate">Complate</Complete>
      <Delete className="Delete">Delete</Delete>
    </div>
  );
}

export default App;