import React from 'react'
import './Tienda.css'
import Card from '../card/Card';
import slide from '../../img/Foro_Tienda.svg'

function Tienda() {
  const productos = [
    { title: 'Merchandising', date: 'Actualización reciente', image: 'ruta_a_la_imagen1', description: 'Ropa, figuras coleccionables, pósters y más.'},
    { title: 'Comunidad y Experiencias', date: 'Nuevas llegadas', image: 'ruta_a_la_imagen2', description: 'Entradas a eventos exclusivos y productos personalizados para miembros de la comunidad.'},
    { title: 'Cursos y Formacion', date: 'Últimos lanzamientos', image: 'ruta_a_la_imagen3', description: 'Aprende a jugar con profecionales del campo' },
    { title: 'Videojuegos y Consolas', date: 'Descuentos sorprendentes', image: 'ruta_a_la_imagen4', description: 'Juegos y accesorios para distintas plataformas, como PC, consolas, y móviles.'},
  ];
  return (
    <div className='max-w-screen-xl flex flex-row flex-wrap justify-center mx-auto'>
        <div className='tienda w-[95%] flex-row self-center rounded-2xl m-2 flex shadow-xl shadow-slate-600 p-4'>
          <div className='mr-9 w-[30%] flex flex-col gap-2'>
            <h2 className='news_title text-left w-full'>TIENDA</h2>
            <figure className='w-full h-64'>
              <img src={slide} alt="imagen tienda compensar" className='h-full w-auto mx-auto'/>
            </figure>
            <h2 className='tienda_title'>Unete a la moda</h2>
            <p className='text-gray-500 text-sm'>
              We’re not done building Duolingo. We’re constantly
              exploring ways to improve our products and better work
              together. As we grow, we’re looking for people who like
              to roll up their sleeves, figure things out, and actively.
            </p>
            <button className='block text-white font-bold py-2 px-4 rounded-2xl' style={{backgroundColor:'var(--secondary)'}}>Conoce Nuestros productos</button>
          </div>
          <div className='grid grid-cols-2 grid-rows-2 gap-6 w-[70%]'>
            {productos.map((producto, index) => (
              <Card key={index} title={producto.title} date={producto.date} image={producto.image} description={producto.description} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Tienda
