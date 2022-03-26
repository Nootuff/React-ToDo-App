import { useState } from "react";

export default function Viewing() {
  const [proj, setProj] = useState("1");

  return [proj, setProj];
}