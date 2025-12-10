import React, { useState } from "react";
import Button from "./Button";
import './calculator.css';

function KeyPadComponent() {

    const [text1, setText] = useState("");
    const [showImage, setShowImage] = useState(false);

    const ClickHandle = (e) => {
        const val = e.target.value;

        if (val === "C") {
            setText("");
        }
        else if (val === "=") {
            try {
                setText(eval(text1).toString());
            } catch {
                setText("Error");
            }
        }
        else if (val === "show me") {
            setShowImage(true);
        }
        else if (val === "square") {
            const num = Number(text1);
            if (!isNaN(num)) {
                setText((num * num).toString());
            } else {
                setText("Error");
            }
        }
        else {
            setText(text1 + val);
        }
    };


    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>

            <div>
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle} />
                <Button label="C" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="1" ClickHandle={ClickHandle} />
                <Button label="2" ClickHandle={ClickHandle} />
                <Button label="3" ClickHandle={ClickHandle} />
                <Button label="+" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="4" ClickHandle={ClickHandle} />
                <Button label="5" ClickHandle={ClickHandle} />
                <Button label="6" ClickHandle={ClickHandle} />
                <Button label="-" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="7" ClickHandle={ClickHandle} />
                <Button label="8" ClickHandle={ClickHandle} />
                <Button label="9" ClickHandle={ClickHandle} />
                <Button label="*" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="." ClickHandle={ClickHandle} />
                <Button label="0" ClickHandle={ClickHandle} />
                <Button label="=" ClickHandle={ClickHandle} />
                <Button label="/" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="show me" ClickHandle={ClickHandle} />
                <Button label="square" ClickHandle={ClickHandle} />
            </div>

            {showImage && (
                <img
                    src="/mypic.jpg"
                    alt="me"
                    style={{ width: "150px", marginTop: "10px" }}
                />
            )}
        </div>
    );
}

export default KeyPadComponent;
