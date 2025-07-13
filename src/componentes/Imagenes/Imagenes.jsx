import "../Sidebar/Sidebar.css"

function Imagen({className='imagen',src="/imagenes/imagenBase.jpg",alt='Esta es una imagen'}){

    return(
        <>
            <img
                className={className}
                src={src}
                alt={alt}
            />

        </>


    );
}
export default Imagen;