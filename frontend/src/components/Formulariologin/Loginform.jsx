//Importacion de los estados de react
import React, {useState} from 'react';

// Importacion de los axios carga la biblioteca Axios para que puedas usarla en tu código, Para realizar solicitudes HTTP y manejar datos de manera sencilla y eficiente.
import axios from 'axios';



// El componente "Loginform.jsx"
const Loginform = () => {
    
    // Uso de los estados para almacenar los datos del campo de registro del Formulario 
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [captcha, setCaptcha] = useState('');

    // Uso de los Estados para los errores de validación
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Uso de los eventos de validacion de los estados de campos de registros
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Uso de condicional (la logica de programacion) para la validacion de que las contraseñas coincidan:
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }
        
        //Realizamos una socilitud POST a la API para registrar el usuario:
        try{
            const response = await axios.post('htpp://localhost:3000/login',{
                nombre,
                email,
                password,
                captcha,
            });
            setSuccess(response.data.message);
        
        //Manejar errores a la solicitud
        } catch (err) {
            setError(err.response.data.message || 'Error de inicio de sesion');            
        }

    };


    return (
        // Aplicacion del html para el formulario del registro
        
        <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
            <div className="relative sm:max-w-sm w-full">
                <div className="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
                <div className="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
                <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
                    <label htmlFor="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                        Regístrate
                    </label>
                    <form onSubmit={handleSubmit} className="mt-10">
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        {success && <p className="text-green-500 text-center">{success}</p>}
                        
                        <div>
                            <input
                                type="text"
                                placeholder="Nombres"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                            />
                        </div>

                        <div className="mt-7">
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                            />
                        </div>

                        <div className="mt-7">
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                            />
                        </div>

                        <div className="mt-7">
                            <input
                                type="password"
                                placeholder="Confirmar contraseña"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                            />
                        </div>

                        <div className="mt-7">
                            <button
                                type="submit"
                                className="b    g-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                            >
                                Registrar
                            </button>
                        </div>

                        <div className="flex mt-7 items-center text-center">
                            <hr className="border-gray-300 border-1 w-full rounded-md" />
                            <label className="block font-medium text-sm text-gray-600 w-full">
                                Regístrate con
                            </label>
                            <hr className="border-gray-300 border-1 w-full rounded-md" />
                        </div>

                        <div className="flex mt-7 justify-center w-full">
                            <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                                Facebook
                            </button>

                            <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                                Google
                            </button>
                        </div>

                        <div className="mt-7">
                            <div className="flex justify-center items-center">
                                <label className="mr-2">¿Ya tienes una cuenta?</label>
                                <a href="#" className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                                    Iniciar sesión
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Loginform;