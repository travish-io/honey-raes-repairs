import React, { useEffect, useState } from "react";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [specialties, setSpecialty] = useState("");

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
