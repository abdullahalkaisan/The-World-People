

export default function UserImgBox(props) {
  return (
    <div style={{height:"100%",width:"100%", display:"flex", cursor:"pointer", justifyContent:"center", alignItems:"center"}}>
        <img  style={{backgroundColor:"red", borderRadius:8, width:"95%", height:"95%", objectFit:"cover",display:"flex", pointerEvents:"none" }}  src={"https://media.sciencephoto.com/image/p9800125/800wm/P9800125.jpg"} alt="img" />
    </div>
  )
}
