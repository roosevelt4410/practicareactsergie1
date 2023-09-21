import { useState } from 'react';

// Define el tipo para el estado del formulario
interface FormState {
    tarea: string;
}

export const useForm = (initialForm: FormState = { tarea: '' }) => {
    // Usa el tipo FormState para el estado
    const [formState, setFormState] = useState<FormState>(initialForm);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // Usa la función de actualización de estado adecuada
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
