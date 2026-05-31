import "./App.css";
import { useState } from "react";
import { Course } from "./component/course";

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

    const Iscomplate = (ID)=>{
      let newcourselist = courselist.map((course)=>{
        if(course.id === ID)
          return {...course , isComplete:!course.isComplete}
        else
          return course
      })
      setCourselist(newcourselist); 
    }

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

      <div>
        {courselist.map((course)=>{
         return (
          <Course
           key={course.id} 
             course={course} 
               deleteCourse={deleteCourse}
                  Iscomplate={Iscomplate}
          
          ></Course>
         )
        })}
      </div>
      
    </div>
  );
}

export default App;