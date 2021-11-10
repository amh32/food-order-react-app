import "./Modal.css"
import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";

const Backdrop = props => {
    return <div className='backdrop' onClick={props.toggle} />
}

const Overlay = props => {
    return <Card className={'modal ' + props.className}>
        {props.children}
    </Card>
}

const Modal = props => {
    const toggle = props.toggle;


    return <>
        {ReactDOM.createPortal(
            <Backdrop
                toggle={toggle}
            />,
            document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(
            <Overlay
                className={props.className}
                toggle={toggle}
            >{props.children}</Overlay>,
            document.getElementById('overlay-root'))}
    </>
}

export default Modal;