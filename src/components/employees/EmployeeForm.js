import React, { useState } from "react";
import { useHistory } from "react-router";

export const EmployeeForm = () => {
  const [employee, hireEmployee] = useState({
    name: "",
    specialty: "",
  });
  const history = useHistory();

  const submitEmployee = (evt) => {
    evt.preventDefault();
    const newEmployee = {
      name: employee.name,
      specialty: employee.specialty,
    };

    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    };

    return fetch("http://localhost:8088/employees", fetchOption)
      .then((Response) => Response.json())
      .then(() => {
        history.push("/employees");
      });
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            onChange={(evt) => {
              const copy = { ...employee };
              copy.name = evt.target.value;
              hireEmployee(copy);
            }}
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Your name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="specialty">Specialty:</label>
          <input
            onChange={(evt) => {
              const copy = { ...employee };
              copy.specialty = evt.target.value;
              hireEmployee(copy);
            }}
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Your specialty"
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={submitEmployee}>
        Submit Employee
      </button>
    </form>
  );
};
