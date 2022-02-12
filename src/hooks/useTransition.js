import React, { useState } from "react";

export default transition => {

    const [open, setOpen] = useState(true);




    return [open, setOpen];

}