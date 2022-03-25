import React, { useState } from "react";

export default viewing => {
  const [proj, setProj] = useState("1");

  return [proj, setProj];
}