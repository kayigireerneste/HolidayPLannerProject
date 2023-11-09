/* eslint-disable react/prop-types */
import { useFormContext } from 'react-hook-form';
import "../reUsableForm/reUsableComponent.css"

const SelectInput = ({ name, label, options }) => {
    const { register } = useFormContext()

    return (
        <div className='TextIput_container'>
            <label htmlFor={name}>{label}</label>
            <select required className='input' id={name} {...register(name)}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
