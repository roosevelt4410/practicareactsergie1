import { useState } from 'react';


interface FormState {
    nombre:string,
    tecnologia:string,
    email:string,
    redes:string
}

export const useForm = (initialForm: FormState = { nombre: '' ,tecnologia:'',email:'',redes:''}) => {
    const [formState, setFormState] = useState<FormState>(initialForm);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return {
        formState,
        onInputChange,
    };
};