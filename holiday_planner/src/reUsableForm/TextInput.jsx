/* eslint-disable react/prop-types */
import { useFormContext } from "react-hook-form"
import "../reUsableForm/reUsableComponent.css"


const TextInput = ({ name, label, type, placeholder }) => {
    const { register } = useFormContext()
    console.log(placeholder);

    return (
        <div className="TextIput_container">
            <label htmlFor={name}>{label}</label>
            <input placeholder={placeholder} required type={type} id={name} {...register(name)} />
        </div>
    );
};

export default TextInput;
