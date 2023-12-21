import React from "react";
import { LinkButton } from "../components/UI/LinkButton";

export const StepThree = () => {
    return (
        <div>
            <h1>Hello3</h1>
            <LinkButton path="/step-two" text="Previous"/>
            <LinkButton path="/step-four" text="Next"/>
        </div>
    )
}