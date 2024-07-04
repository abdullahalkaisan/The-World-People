// import './App.css'

import { Box } from "@mui/material"
import TextInputAutoComplete from "./components/TextInputAutoComplete"
import { continent, countryName, ethnicList, languageList, religion, skinTone } from "./inputData"
import GalleryCard from "./components/GalleryCard"
import { userData } from "./userData"
// import { useReducer } from "react"

function App() {

  // const initialState = 0;
  // const reducer = (state, action) => {
  //   switch (action) {
  //     case 'increase':
  //       return state + 1;
  //     case 'dicrease':
  //       return state - 1;
  //     default:
  //       return state
  //   }
  // }

  // useReducer take 2 argument as peramiter  (function and initialState)
  // stucter [value, dispach] = useReducer(reducer, initialState);
  // The function will also take 2 argement as paramiter (initialStae, actionName) 
                                                      // state will take initialState value  
                                                      // action will take action name that will come from dispach
  // run the dispach funcion and set a value 
  // const [value, dispach] = useReducer(reducer, initialState);

  return (
    <Box>

{/* 
      <h1>{value}</h1>
      <button onClick={() => { dispach("increase") }}>Increase</button>
      <button onClick={() => { dispach("dicrease") }}>Dicrease</button>
 */}


      <Box sx={{ display: "flex", justifyContent: "center", my: 3, py: 3, width: "100%", position: "sticky", top: 0, zIndex: 999, bgcolor: "#ffffffed", backdropFilter: "blur(10px)" }}>
        <TextInputAutoComplete inputData={countryName} label={"Country name"} />
        <TextInputAutoComplete inputData={religion} label={"Religion"} />
        <TextInputAutoComplete inputData={skinTone} label={"Skin tone"} />
        <TextInputAutoComplete inputData={ethnicList} label={"Ethnic"} />
        <TextInputAutoComplete inputData={continent} label={"Continent"} />
        <TextInputAutoComplete inputData={languageList} label={"Language"} />
      </Box>

      <Box sx={{
        display: "flex", flexWrap: "wrap",
        // backgroundColor:"#77777730", 
        width: "100%", justifyContent: "center"
      }}>

        {userData.map((item) => <GalleryCard item={item} key={item.id} />)}


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
