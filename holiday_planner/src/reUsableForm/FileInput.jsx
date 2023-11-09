/* eslint-disable react/prop-types */
import {  useFormContext } from 'react-hook-form';
import "../reUsableForm/reUsableComponent.css"

const FileInput = ({ name, label }) => {
    const { register } = useFormContext()

    return (
        <div className='TextIput_container'>
            <label htmlFor={name}>{label}</label>
            <input required id={name} type="file" {...register(name)} />
        </div>
    );
};

export default FileInput;
