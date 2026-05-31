import "./course.css"
export const Course = (props) => {
  return (
    <div className={`course-container ${props.course.isComplete ? "completed" : ""}`}>
      <h1 className={`course-title ${props.course.isComplete ? "completed" : ""}`}>
        {props.course.courseName}
      </h1>
      <div className="button-group">
        <button 
          className="delete-btn"
          onClick={() => props.deleteCourse(props.course.id)}
        >
          ❌ Delete
        </button>
        <button 
          className={`complete-btn ${props.course.isComplete ? "undo" : ""}`}
          onClick={() => props.Iscomplate(props.course.id)}
        >
          {props.course.isComplete ? "🔄 Undo" : "✅ Complete"}
        </button>
      </div>
    </div>
  );
};