import React,{useState} from 'react'
import { Excalidraw } from "@excalidraw/excalidraw";
const Whiteboard = () => {
    const handleChanges = (data) => {
        console.log(data)
    }
    
    return (
        <div style={{height:'70vh'}}>
            <Excalidraw onChange={(excalidrawElements,appState,files)=> handleChanges(appState)}  />
        </div>
    )
}

export default Whiteboard