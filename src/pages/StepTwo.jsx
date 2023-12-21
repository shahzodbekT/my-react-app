import React from "react";
import { LinkButton } from "../components/UI/LinkButton";

export const StepTwo = () => {
    return (
        <div>
            <h1>Hello2</h1>
            <LinkButton path="/step-one" text="Previous"/>
            <LinkButton path="/step-three" text="Next"/>
        </div>
    )
}