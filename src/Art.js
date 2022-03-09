import React from "react";

function Art (prop) {
    return (
        <div className="tc bg-light-yellow dib pa1 ma2 br4 grow pointer mw8">
            <img src={"https://robohash.org/" + prop.name + "?200*200"} alt="Picture" />
            <h2>{prop.name}</h2>
            <p>{prop.hash}</p>
        </div>
    );
}
export default Art;