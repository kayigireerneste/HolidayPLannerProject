/* eslint-disable react/prop-types */
import "../reUsableForm/reUsableComponent.css"
import { FormProvider, useForm } from 'react-hook-form';
import TextInput from '../reUsableForm/TextInput.jsx';
import SelectInput from '../reUsableForm/SelectInput.jsx';
import FileInput from '../reUsableForm/FileInput.jsx';
import ReusableButton from '../reUsableForm/ReUsableButton.jsx'

const ReusableForm = ({ onSubmit, children }) => {
    const  methods = useForm();
    const submitHandler = methods.handleSubmit(onSubmit);

    return (

        <FormProvider {...methods}>
            <form className="addatourForm" onSubmit={submitHandler}>
                {children}
            </form>
        </FormProvider>
    );
};

export { TextInput, SelectInput, FileInput, ReusableForm, ReusableButton };
