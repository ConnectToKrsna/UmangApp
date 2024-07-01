import "./Title.css"

import { styled } from '@mui/material/styles';
export default function Title({title,size}){
    let styles={fontSize:size}
    return(
        <div className="title">
            <h1 style={styles}>{title}</h1>
        </div>
    )
}