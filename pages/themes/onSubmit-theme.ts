import {MouseEvent} from "react";
export const onSubmit = async (event: MouseEvent) => {
    event.preventDefault();
    const value = (event.target as any).querySelector("select").value;
    fetch('./api/upload', { method: "POST", body: value })
}
