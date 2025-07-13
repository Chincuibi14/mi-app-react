import { Form } from 'react-bootstrap';

function InputGroup ({name,id,label,type='text',value,onChange,placeholder}){
    return(
        <Form.Group className="mb-3" id={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder= {placeholder}
            required
            
           />

        </Form.Group>

    );
}
export default InputGroup;