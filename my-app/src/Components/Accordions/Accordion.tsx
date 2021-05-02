import React from "react";

type AccordionPropsType = {
    titleValue: string
}
type AccordionTitlePropsType = {
    title: string
}
type  AccordionBodyPropsType = {

}

export function Accordion(props:AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody />
        </div>
    )
}
function AccordionTitle (props:AccordionTitlePropsType) {
    return (
        <h2>{props.title}</h2>
    )
}
function AccordionBody (props:any) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)}