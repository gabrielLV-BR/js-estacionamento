
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export function Home() {

    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);

    const clicked = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        (async() => {
            const result = await fetch("http://localhost:5050/vehicle/")
            setItems(await result.json())
        })()
    }, [])

    return (
        <div className={styles.container}>
            <h1>Hello!</h1>
            <button onClick={clicked}>Clicked {count} times</button>
            {
                (items.length > 0) && 
                <ul>
                    {items.map((i : any) => 
                        <li key={i.id}>{i.modelo}</li>    
                    )}
                </ul>
            }
        </div>
    )
}