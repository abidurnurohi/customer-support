import React from 'react';

const SelectedTickets = ({ticket, handleTicket}) => {
    return (
        <div onClick={() => handleTicket(ticket)}
            className="text-black bg-white shadow-sm p-4 rounded-md h-full flex flex-col justify-between"
            key={ticket.id}
        >
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold">{ticket.title}</h2>
                    <span className="bg-green-300 rounded-full px-3">{ticket.status}</span>
                </div>
                <p>{ticket.description}</p>
            </div>
            <div className="flex justify-between mt-4">
                <div className="flex gap-2">
                    <p>#{ticket.id}</p>
                    <p>{ticket.priority}</p>
                </div>
                <div className="flex gap-4">
                    <p>{ticket.customer}</p>
                    <div className="flex gap-2">
                        <img
                            src="https://i.ibb.co.com/kVDgXTzd/ri-calendar-line.png"
                            alt=""
                        />
                        <p>{ticket.createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedTickets;