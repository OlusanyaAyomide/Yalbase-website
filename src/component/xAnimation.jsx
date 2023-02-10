import { animate } from "framer-motion";

export const BallAnimation ={
    initial:{
        left:"-130%"
    },
    animate:{
        left:"100%",
        transition:{
            ease:"linear",
            duration:10,
            repeat:Infinity,
            repeatDelay:1,

        },
    }
}

const Text = "Loyalbaze"