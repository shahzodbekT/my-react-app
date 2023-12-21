import React from "react";
import { LinkButton } from "../components/UI/LinkButton";

export const Welcome = () => {
    return (
        <div>
            <h1>Добро пожаловать!</h1>
            <LinkButton path="/step-one" text="Next"/>
        </div>
    );
}