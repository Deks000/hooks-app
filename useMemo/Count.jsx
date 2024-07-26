import React from "react";

const render = {
    count1: 0,
    count2: 0,
};

export default React.memo(function Count({id, value}){
    console.log(`Count${id} render: ${++render[`count${id}`]}`);

    return (
        <div>
            <h1>{value}</h1>
        </div>
    );
});

