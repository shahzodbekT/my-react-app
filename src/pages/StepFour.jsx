import React from "react";
import { LinkButton } from "../components/UI/LinkButton";

export const StepFour = () => {
    return (
        <div>
            <h1>Hello4</h1>
            <LinkButton path="/step-three" text="Previous"/>
            <LinkButton path="/thanks" text="Next"/>
        </div>
    )
}