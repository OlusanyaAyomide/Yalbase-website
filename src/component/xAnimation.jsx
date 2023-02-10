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

export const Text = "Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business. Sign up now to get early access."

export const FooterText = "2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos, Nigeria."