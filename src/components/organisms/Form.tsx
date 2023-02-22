import React, {ReactNode} from "react";

type FormProps = {
    onSubmit: () => void,
    children: ReactNode
}

export const Form = ({onSubmit, children}: FormProps) => {
    return (
        <form onSubmit={onSubmit}>
            { children }
        </form>
    )
}