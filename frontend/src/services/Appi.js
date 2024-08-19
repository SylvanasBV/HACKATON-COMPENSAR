/*
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getFunction(){
    const response = await axios.get(`${API_URL}/usuario`);
    return response.data;
}

export async function postUsuario(value){
    const response = await axios.post(`${API_URL}/save`,value);
    console.log(response.data);
}

export async function updateUsuario(value){
    const response = await axios.put(`${API_URL}/edit`,value);
    console.log(response.data);
}
export async function deleteUsuario(id_usuario){
    try {
        const response = await axios.delete(`${API_URL}/delete/${id_usuario}`);
        console.log(response.data);
        return response.data;  // Puedes devolver los datos si es necesario para manejarlos en tu componente
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        throw error;  // Puedes manejar el error de otra manera si es necesario
    }
}

export async function getNota(){
    const response = await axios.get(`${API_URL}/calificaciones`);
    return response.data;
}

export async function getActividad(){
    const response = await axios.get(`${API_URL}/Actividades`);
    return response.data;
}

export async function getSesion(){
    const response = await axios.get(`${API_URL}/sesion`);
    return response.data;
}*/