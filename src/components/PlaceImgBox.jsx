

export default function PlaceImgBox(props) {
  return (
    <div style={{height:"100%",width:"100%", display:"flex", cursor:"pointer", justifyContent:"center", alignItems:"center"}}>
        <img  style={{ borderRadius:8, width:"95%", height:"95%", objectFit:"cover",display:"flex", pointerEvents:"none" }}  src={props.img} alt="img" />
    </div>
  )
}
