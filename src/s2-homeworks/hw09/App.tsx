import React from 'react'
import s from '../../s1-main/App.module.css'
import HW1 from '../hw01/HW1'
import HW2 from "../hw02/HW2";
import HW3 from "../hw03/HW3";

function App() {
    return (
        <div className={s.App}>
            <HW1/>
            {/*раскомментировать по ходу выполнения*/}
            <HW2/>
            <HW3/>
            {/*<HW4/>*/}

            {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
            {/*<HW5/>*/}
        </div>
    )
}

export default App
