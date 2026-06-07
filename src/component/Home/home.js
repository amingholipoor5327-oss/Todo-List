import "./home.css"
import { useEffect, useState , useContext } from "react";
import {Course} from "../Course/course"
 import  {CourseContext} from  "../../Context/usecontext.js"
import { Link } from "react-router-dom";
import { Sidebar } from "../sidebar/sidebar.js";
 export const Home = ()=>{
     const {courselist , setCourselist} = useContext(CourseContext)


  const [newcourse, setNewcourse] = useState("");

useEffect(() => {
  console.log("saving:", courselist);
  localStorage.setItem("course", JSON.stringify(courselist));
}, [courselist]);
  


  const handleInput = (e) => {
    setNewcourse(e.target.value);
  };

  const deleteAll = ()=>{
    localStorage.removeItem("course");
    setCourselist([])
  }

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
      <Sidebar></Sidebar>
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

       <Link to={"/complete"}><button className="complate">Complate</button></Link> 
       <button className="Delete" onClick={deleteAll}>Delete all</button>  
    </div>
  );
}