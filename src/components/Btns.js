import { useState } from "react";

function Btns(props){
    let [index, setIndex] = useState(0);

    function move(num){
        setIndex(num);
        props.frame.current.style.transform= `rotate(${num*props.deg}deg)`
    }
    return (
        <>
            <div className="btnPrev" onClick={()=>move(--index)}>
                <span>PREV</span>
            </div>

            <div className="btnNext" onClick={()=>move(++index)}>
                <span>NEXT</span>
            </div>
        </>
    )
}

export default Btns;