import { Form, Container } from 'react-bootstrap';
import Boton from '../Button/button';
import React, { useState } from 'react';
import InputGroup from './InputGroup';

function Formulario({campos,handleLogin}){

    const [formData, setFormData] = useState({});

      // Cuando cambia cualquier input
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    return(
        <Container className="mt-4" style={{ maxWidth: '500px' }}>
            <Form>
                {campos.map((campo, index) => (
                    <InputGroup
                        key={index}
                        id={campo.id}
                        name={campo.id}
                        label={campo.label}
                        type={campo.type}
                        value={formData[campo.id] || ''}
                        onChange={handleChange}
                        placeholder={campo.placeholder}
                    />
                ))}


                <Boton
                variante='success'
                className='w-100'
                size='lg'
                texto='Enviar'
                onClick={()=>handleLogin(formData)}>
                

                </Boton>
            </Form>
        </Container>


    );
}
export default Formulario;