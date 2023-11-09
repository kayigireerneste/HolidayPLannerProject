/* eslint-disable react/prop-types */
import "../reUsableForm/reUsableComponent.css"
import { FormProvider, useForm } from 'react-hook-form';
import TextInput from '../reUsableForm/TextInput.jsx';
import SelectInput from '../reUsableForm/SelectInput.jsx';
import FileInput from '../reUsableForm/FileInput.jsx';

const ReusableForm = ({ onSubmit, children }) => {
    const  methods = useForm();
    const submitHandler =methods.handleSubmit(onSubmit);

    return (

        <FormProvider {...methods}>
            <form className="addatourForm" onSubmit={submitHandler}>
                {children}
                <button className="AddTourButton" type="submit">Submit</button>
            </form>
        </FormProvider>
    );
};

export { TextInput, SelectInput, FileInput, ReusableForm };
