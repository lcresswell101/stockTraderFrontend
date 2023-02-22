type ButtonProps = {
    type: "button" | "submit",
    text: string
}

export const Button = ({type, text}: ButtonProps) => {
    return (
        <button type={type} className="p-3 text-white bg-green-500 border border-green-900">
            {text}
        </button>
    )
}