import React, { useState } from "react";

export default transition => {

    const [shrink, setShrink] = useState(true);


    const multShrink = () => {
        setShrink(!shrink)
    }


    return [shrink, multShrink];

}