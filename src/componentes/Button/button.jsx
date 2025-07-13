import { Button } from 'react-bootstrap';

function Boton({variante='primary',size='sm',onClick,type='button',texto='boton',className='',disabled= false}){
    return(
        <Button 
        variant={variante}
        size={size}
        onClick={onClick}
        type={type}
        className={className}
        disabled={disabled}
        
        >
        {texto}


        </Button>


    );
}
export default Boton;