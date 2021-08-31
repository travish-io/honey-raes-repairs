import React, { useEffect, useState } from "react";

export const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [totalTicketMessage, updateMessage] = useState("");

  useEffect(() => {
    fetch(
      "http://localhost:8088/serviceTickets?_expand=employee&_expand=customer"
    )
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
      });
  }, []);

  useEffect(() => {
    if (tickets.length === 1) {
      updateMessage("You have 1 customer");
    } else {
      updateMessage(`You have ${tickets.length} tickets`);
    }
  }, [tickets]);
  return (
    <>
      <div>
        <strong>{totalTicketMessage}</strong>
      </div>
      {}
      {tickets.map((ticket) => {
        if (ticket.employee) {
          return (
            <p key={`ticket--${ticket.id}`}>
              {ticket.description} created by {ticket.customer.name} completed
              by {ticket.employee.name}.
            </p>
          );
        } else {
          return (
            <p key={`ticket--${ticket.id}`}>
              {ticket.description} created by {ticket.customer.name}.{" "}
              <strong>Ticket is Open!</strong>
            </p>
          );
        }
      })}
    </>
  );
};
