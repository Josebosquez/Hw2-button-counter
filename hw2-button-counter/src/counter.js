import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    const imageCount = document.querySelector('#imageCount')
    const [imgArray, setImgArray] = useState([])

    const addOne = () => {
        setCounter(counter + 1);
        imgComponentAdd()

        if (counter > 0){
            imgArray.push(counter)
        }
        console.log(imgArray)
    }

    const subtractOne = () => {
        setCounter(counter - 1);
        imgComponentDelete()
    }

    const reset = () => {
        setCounter(0);
        removeImages(imageCount);
        console.log(imgArray)
    }

    function imgComponentAdd() {
        if (counter >= 0) {
            const imageCount = document.querySelector('#imageCount')
            const img = document.createElement('div')
            img.innerHTML = '<img src="https://img.icons8.com/office/30/000000/add-ticket.png"/>'
            imageCount.appendChild(img)
        }
    }

    function imgComponentDelete() {
        if (counter > 0) {
            const imageCount = document.querySelector('#imageCount')
            imageCount.removeChild(imageCount.lastElementChild)
        }
    }

    function removeImages(item) {
        while (item.firstChild) {
            item.removeChild(item.firstChild);
        }
    }

    return (
        <div>
            <div style={{ border: "1px solid black", display: 'flex', width: '500px', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <button onClick={() => { addOne() }} style={{ width: '75px', fontSize: '50px' }}>+</button>
                <h1>{counter}</h1>
                <button onClick={() => { subtractOne() }} style={{ width: '75px', fontSize: '50px' }} >-</button>
                <button onClick={() => { reset() }}>Reset</button>
            </div>
            <div id='imageCount'>

            </div>
        </div>
    )
}

export default Counter