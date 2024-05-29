// import './App.css'

import { Box } from "@mui/material"
import TextInputAutoComplete from "./components/TextInputAutoComplete"
import { continent, countryName, ethnicList, languageList, religion, skinTone } from "./inputData"
import GalleryCard from "./components/GalleryCard"
import { userData } from "./userData"

function App() {

  

  return (
    <Box>
        <Box sx={{display:"flex", justifyContent:"center", my:3, py:3, width:"100%", position:"sticky", top:0, zIndex:999, bgcolor: "#ffffffed", backdropFilter:"blur(10px)"}}>
          <TextInputAutoComplete inputData={countryName} label={"Country name"}/>
          <TextInputAutoComplete inputData={religion} label={"Religion"}/>
          <TextInputAutoComplete inputData={skinTone} label={"Skin tone"}/>
          <TextInputAutoComplete inputData={ethnicList} label={"Ethnic"}/>
          <TextInputAutoComplete inputData={continent} label={"Continent"}/>
          <TextInputAutoComplete inputData={languageList} label={"Language"}/>
        </Box>

        <Box sx={{display:"flex", flexWrap:"wrap", 
        // backgroundColor:"#77777730", 
        width:"100%", justifyContent:"center"}}>

          {userData.map((item)=> <GalleryCard item={item} key={item.id}/>)}


          {/* <GalleryCard/>
          <GalleryCard/>
          <GalleryCard/>
          <GalleryCard/> */}
        </Box>


    </Box>
  )
}

export default App

// https://qph.cf2.quoracdn.net/main-qimg-da40f5655332066821daee66e375080c-lq 
