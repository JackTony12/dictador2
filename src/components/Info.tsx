import React from 'react'
import { useState } from 'react'

const Info = ({ index }: { index: number }) => {
    const [indice, setIndice] = useState(index)
    const dataOfInfo = [
        {
            title: 'Palabras por grupo',
            description: 'Establece cuántas palabras dirá el speaker antes de hacer una pausa. Por ejemplo, si eliges 5, el speaker leerá de 5 palabras con un pequeño descanso entre cada grupo de palabras.',
        }
        , {
            title: 'Tiempo de pausa',
            description: 'Define el tiempo de espera en segundos entre cada grupo de palabras con un maximo de 10 segundos.',
        }
        , {
            title: 'Repeticion por oracion',
            description: 'Define el numero de veces que se repetira cada oracion antes de pasar a la siguiente.',
        }
        , {
            title: 'Velocidad de lectura',
            description: ' Define la velocidad de lectura del speaker. Si cambias la velocidad mientras ya está hablando, el cambio solo se aplicará desde siguiente frase que lea, no desde la actual',
        }
    ]

    const handleCreateModalInfo = () => {
        if (document.getElementById('modal-info')) return
        const modal = document.createElement('div')
        modal.className = 'fixed left-[50%] top-[50%] inset-0 w-[400px] h-[200px] p-4 text-white rounded-xl shadow-xl/30 bg-gray-900 bg-opacity-75 z-50 '
        modal.id = 'modal-info'
        modal.innerHTML = ` <h2 class='text-orange-300 font-black'>${dataOfInfo[indice].title}</h2>
            <small>${dataOfInfo[indice].description}</small>
            <button id='close-modal' class='btn_stop block text-[12px] absolute right-4 bottom-4' id="close-info">Cerrar</button>`
        document.body.appendChild(modal)
        document.getElementById('close-modal')?.addEventListener('click', () => {
            document.body.removeChild(modal)
        })

    }



    return (
        <div onClick={handleCreateModalInfo} className='inline-block cursor-pointer hover:scale-110 transition duration-75'>
            <svg
                stroke='currentColor'
                fill='orangered'
                strokeWidth='0'
                viewBox='0 0 512 512'
                height='.8em'
                width='.8em'
                id='info-icon'
            ><path
                d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'
            ></path></svg
            >
        </div>
    )
}

export default Info