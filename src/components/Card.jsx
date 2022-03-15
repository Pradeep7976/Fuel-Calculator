import React, { useState } from "react";

function Card() {
  function clicki() {
    // Setfuel(Fuel / dist);
    console.log("dist is" + dist);
    console.log("Kmpl is" + kmpl);
    console.log(dist / kmpl);
    if (dist == 0 || kmpl == 0) {
      setdist(0);
      setkmpl(0);
      alert("Please enter the valid details");
    }
    if (dist != 0 && kmpl != 0) {
      Setfuel((dist / kmpl).toFixed(2));
    }
    // Setfuel(Fuel);
  }
  const [Fuel, Setfuel] = useState(0);
  const [dist, setdist] = useState(0);
  const [kmpl, setkmpl] = useState(0);
  return (
    <div>
      <div class="card-header headi">Fuel Calculator</div>
      <br></br>
      <center>
        <form method="post">
          <input
            type="number"
            class="inp inp1"
            placeholder="Distance"
            onChange={(e) => setdist(e.target.value)}
          ></input>
          <br></br>

          <div class="car">
            <input
              type="number"
              class="inp inp2"
              placeholder="KM per liter"
              onChange={(e) => setkmpl(e.target.value)}
            ></input>
          </div>
          <br></br>
          <button
            type="button"
            style={{ color: "black" }}
            class="btn  bg-transparent"
            onClick={clicki}
          >
            Calculate
          </button>
        </form>
        <h3>The Fuel needed is {Fuel} liters;</h3>
      </center>
    </div>
  );
}

export default Card;
