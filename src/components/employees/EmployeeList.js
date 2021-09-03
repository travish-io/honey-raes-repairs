import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [specialties, setSpecialty] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:8088/employees")
      .then((res) => res.json())
      .then((employeeArray) => {
        setEmployees(employeeArray);
      });
  }, []);
  useEffect(() => {
    const justSpecialties = employees.map((emp) => emp.specialty);
    setSpecialty(justSpecialties.join(", "));
  }, [employees]);
  return (
    <>
      <div>
        <button
          onClick={() => {
            history.push("/employees/create");
          }}
        >
          Hire New Employee
        </button>
      </div>
      <div>
        <strong>Specialties: {specialties}</strong>
      </div>
      {employees.map((employeeObject) => {
        return (
          <h4 key={`employee--${employeeObject.id}`}>{employeeObject.name}</h4>
        );
      })}
    </>
  );
};
