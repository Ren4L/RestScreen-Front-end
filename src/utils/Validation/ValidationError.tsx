import {MutableRefObject} from "react";

export default class ValidationError extends Error {
    inputIndex:number;

    constructor(message:string, inputIndex:number) {
        super(message);
        this.name = "ValidationError";
        this.inputIndex = inputIndex;
    }
}