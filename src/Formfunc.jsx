import { useState } from "react";

function Formfunc() {
  const [first, last] = useState("");
  const handlef = (event) => {
    last(event.target.value);
  };
  const allow=(event)=>{
    event.preventDefault();
    alert(`${last}`)
  }

  return (
    <div>
      <form onSubmit={allow}>
        <input type="text" value={first} onChange={handlef} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Formfunc;
