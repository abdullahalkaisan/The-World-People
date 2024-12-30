import { AutoPlay, } from '@egjs/flicking-plugins';
import Flicking from '@egjs/react-flicking';
import { Box, Chip, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { BiWorld } from 'react-icons/bi';
// import { FaRegSnowflake } from 'react-icons/fa';
// import { FiCloudRain } from 'react-icons/fi';
import { IoLanguage } from 'react-icons/io5';
import { MdOutlineDragHandle, MdOutlineDragIndicator, MdStars } from 'react-icons/md';
import { RiGroupLine } from 'react-icons/ri';

export default function GalleryCard(props) {


    const [isBig, setIsBig] = useState(true);
    const data = props.item;
    const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })];

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };


    // {userData.length}



    return (



        <Box sx={{ display: "flex", 
        // border:"1px solid #00000030", bgcolor:"#fff", 
        p:3, borderRadius:3, m: { md: 3, xs: 0 } }}>

            <Box>
                <Box sx={{ width: 300, height: 300}}>
                    <Flicking
                        align="prev"
                        plugins={plugins}
                        
                    >

                        {data.malePic.map((item, index) => <div key={index} style={{ height: "100%", width: "100%", display: `${"flex"}`, cursor: "pointer", justifyContent: "center", alignItems: "center" }}>
                            <img style={{ borderRadius: 8, width: "95%", height: "95%", objectFit: "cover", display: "flex", pointerEvents: "none" }} src={item} alt="Can't load Image" />
                        </div>)}


                    </Flicking>
                </Box>
                <Box sx={{ width: 300, height: 300 }}>
                    <Flicking
                        align="prev"
                        plugins={plugins}
                    >

                            {data.femalPic.map((item, index) => <div key={index} style={{ height: "100%", width: "100%", display: `${"flex"}`, cursor: "pointer", justifyContent: "center", alignItems: "center" }}>
                                <img style={{ borderRadius: 8, width: "95%", height: "95%", objectFit: "cover", display: "flex", pointerEvents: "none" }} src={item} alt="Can't load Image" />
                            </div>)}
                        


                        {/* <UserImgBox img={"https://i.unu.edu/media/ourworld.unu.edu-en/article/21499/file-20191212-85381-z6hbpu-2.jpg"}/>
                    <UserImgBox img={"https://media.sciencephoto.com/image/p9800125/800wm/P9800125.jpg"}/>
                    <UserImgBox img={"https://storage.ws.pho.to/s2/698f541db8e4fe2e480c9ed2d3e792be5517e642_m.jpeg"}/>
                    <UserImgBox img={"https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/6/2020_6$largeimg_1917650137.jpg"}/> */}

                    </Flicking>
                </Box>

            </Box>



            <Box>
                {/* place  */}
                <Box sx={{ width: 400, height: 300 }}>
                    <Flicking
                        align="prev"
                        plugins={plugins}
                    >


                    {data.placePic.map((item, index) => <div key={index} style={{height:"100%",width:"100%", display:"flex", cursor:"pointer", justifyContent:"center", alignItems:"center"}}>
                        <img  style={{ borderRadius:8, width:"95%", height:"95%", objectFit:"cover",display:"flex", pointerEvents:"none" }}  src={item} alt="Can't load Image" />
                    </div>)}

                    
                    {/* <PlaceImgBox img={"https://boomers-daily.com/wp-content/uploads/2022/05/travel-guide-ten-best-places-to-visit-in-bangladesh-video-may-7-2022.jpg"}/>
                    <PlaceImgBox img={"https://seamountbeachcafe.com/wp-content/uploads/2023/10/top-10-places-to-visit-in-coxsbazar.webp"}/>
                    <PlaceImgBox img={"https://statemag.state.gov/wp-content/uploads/2021/02/0321POM-29.jpg"}/>
                    <PlaceImgBox img={"https://media-cdn.tripadvisor.com/media/photo-s/12/9f/60/2c/street-in-old-dhaka.jpg"}/>
                    <PlaceImgBox img={"https://www.benarnews.org/english/news/bengali/bangladesh-rohingya-05112020180500.html/200511_BD_COVID_1000.jpg/@@images/a7e9d62d-4570-4d56-8c5e-ed136d87e5ab.jpeg"}/>
                    <PlaceImgBox img={"https://upload.wikimedia.org/wikipedia/commons/4/48/Gulshan%2C_Dhaka_%2829887795536%29.jpg"}/>
                    <PlaceImgBox img={"https://media.istockphoto.com/id/1550261852/photo/beautiful-tea-gardens-in-srimongol-sylhet.jpg?s=612x612&w=0&k=20&c=fiEPm28qBRB-PDaSb73AaFTK3NoLu9Kg1cfXHOHXndM="}/>
                    <PlaceImgBox img={"https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogzB8BGDn5J45LisskNSi5r3F07ohqWXZ4.png"}/>
                      */}
                     





                    </Flicking>
                </Box>

                {/* details  */}

                {/* width 600 if fram height 270  */}
                <Box sx={ isBig ? { width: 500, height: 330 } : {width: 400, height: 300}}>
                    <Flicking
                        align="prev"
                        circular={false}
                        onMoveEnd={e => {
                            console.log(e);
                        }}>




                        <div style={{ width: "100%", height: "100%", display:"flex", flexDirection:"column", padding: 15 }} className="panel">
                            <Typography style={{ display: "flex", alignItems: "center", marginBottom: 20 }} variant="h5" gutterBottom>
                                {data.country}
                                <span style={{ margin: "0 5px", display: "flex" }}>
                                    {/* 20x15  */}
                                    <img src={`https://flagcdn.com/24x18/${data.flag}.png`} />
                                </span>
                            </Typography>

                            {/* #F6DACB  */}
                            {/* #DBB8A1  */}
                            {/* #73544A  */}
                            <Box sx={{display:"flex", flexWrap:"wrap", width:"80%"}}>
                                <Chip onClick={handleClick} style={{ marginRight: 8, marginBottom: 8, }} icon={<BiWorld size={"15px"} style={{ marginLeft: 10 }} />} label={data.continent} />
                                <Chip onClick={handleClick} style={{ marginRight: 8, marginBottom: 8, }} icon={<RiGroupLine size={"15px"} style={{ marginLeft: 10 }} />} label={data.ethnic} />
                                <Chip onClick={handleClick} style={{ marginRight: 8, marginBottom: 8, }} icon={<IoLanguage size={"15px"} style={{ marginLeft: 10 }} />} label={data.language} />
                                <Chip onClick={handleClick} style={{ marginRight: 8, marginBottom: 8, }} icon={<div style={{ height: "20px", width: "20px", borderRadius: 999, backgroundColor: "#DBB8A1" }}></div>} label={data.skinTone} />
                                <Chip onClick={handleClick} style={{ marginRight: 8, marginBottom: 8, }} icon={<MdStars color='brown' size={"15px"}/>} label={data.religion} />
                            </Box>

                            {/* <Tooltip title="Has Raining Season">
                                <FiCloudRain size={"20px"} color='#777' style={{marginLeft:10}}/>
                            </Tooltip>
                            <FaRegSnowflake size={"20px"} color='#777' style={{marginLeft:10}}/> */}
                        </div>

                        {/* <Chip onClick={handleClick} style={{ marginRight: 8, marginBottom: 8, }} icon={<FiCloudRain size={"15px"} style={{ marginLeft: 10 }} />} label="Has Rain" />
                        <Chip onClick={handleClick} style={{ marginRight: 8, marginBottom: 8, }} icon={<FaRegSnowflake size={"15px"} style={{ marginLeft: 10 }} />} label="No Snow" /> */}

                            {
                                data.youtubeLink.map((item, index)=> 
                                <div key={index} style={{ display: "flex", flexDirection: "column", borderRadius: 9, cursor: "pointer", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", }} className="panel">

                                    <IconButton><MdOutlineDragHandle /></IconButton>

                                    <iframe 
                                    allowfullscreen="true" 
                                    style={{ border: "none", borderRadius: 10 }} 
                                    
                                    width="80%" 
                                    height="225" 
                                    src={`https://www.youtube.com/embed/${item.slice(32, 43)}?autoplay=0&loop=1&mute=1&si=FHkWhKJqJ_fxavQL`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                )
                            }



                    </Flicking>
                </Box>
            </Box>



        </Box>

    )
}
