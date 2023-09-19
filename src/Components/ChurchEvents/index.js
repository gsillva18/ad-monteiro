import React from "react";

function ChurchEvents() {

    const events = [{ "name": "user 1" }, { "name": "user 2" }];


    return (
        <div>
            {events.map((churchEvent) => (
                <div>
                    {churchEvent.name}
                </div>
            ))}
        </div>
    );
}

export default ChurchEvents;