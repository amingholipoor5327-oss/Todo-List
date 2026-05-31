export const Course = (props)=>{

 return(<div>
  <h1>{props.course.courseName}</h1>
          <button onClick={() => props.deleteCourse(props.course.id)}>❌ Delete</button>

    </div>)
}

   
 