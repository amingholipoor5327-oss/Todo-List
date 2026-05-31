export const Course = (props)=>{

 return(<div style={{backgroundColor:
    props.course.isComplete? "green" : "white"
 }}>
    <h1>{props.course.courseName}</h1>
        <button onClick={() => props.deleteCourse(props.course.id)}>❌ </button>
        <button onClick={() =>  props.Iscomplate(props.course.id)}> ✅ </button>
    </div>)
}

   
 