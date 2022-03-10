import React from "react";

function Art (prop) {
    return (
        <div className="tc bg-light-gray dib pa1 ma2 br4 grow mw8 shadow-3">
            <img src={"https://robohash.org/" + prop.hash + "?200*200"} alt="Picture" />
            <h2>{prop.name}</h2>
            <p>{prop.hash}</p>
            <h3>{prop.price}</h3>
            <a class="f6 link dim ph3 pv2 mb2 dib white br4 bg-dark-gray" href="#0">Buy</a>
        </div>
    );
}
export default Art;