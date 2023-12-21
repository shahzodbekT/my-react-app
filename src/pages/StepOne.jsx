import React from "react";
import { LinkButton } from "../components/UI/LinkButton";

export const StepOne = () => {
    return (
        <div>
            <h1>Hello</h1>
            <LinkButton path="/" text="Previous"/>
            <LinkButton path="/step-two" text="Next"/>
        </div>
    )
}