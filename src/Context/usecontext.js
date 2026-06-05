import { createContext, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courselist, setCourselist] = useState(() => {
    const saved = localStorage.getItem("course");
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <CourseContext.Provider
      value={{
        courselist,
        setCourselist,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};