import { useState } from "react";

function MappingTwo() {
    const [Student, setStudentData] = useState([{ name: "gaurav", age: 23, role: "Student" }, { name: "vikas", age: 24, role: "Teacher" }, { name: "vikas", age: 50, role: "Developer" }])
    console.log("Student Data: ", Student)
    return (
        <div>
            {Student.map((i) => (
                <div>
                    <h1>Name:{i.name}</h1>
                    <h1>Age:{i.age}</h1>
                    <h1>Role:{i.role}</h1>
                </div>
            ))}
        </div>
    )
}
export default MappingTwo;