import { Box, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Example Nav
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState({});
//   const [location, setLocation] = useState("");

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=ru&appid=6e19fd4d46949925fd8189ac5b44b018`;

//   const searchLocation = (event) => {
//     if (event.key === "Enter") {
//       axios.get(url).then((response) => {
//         setData(response.data);
//         console.log(response.data);
//       });
//       setLocation("");
//       console.log(data);
//     }
//   };

//   return (
//     <div className="app">
//       <div className="search">
//         <input
//           value={location}
//           onChange={(event) => setLocation(event.target.value)}
//           onKeyPress={searchLocation}
//           placeholder="Введите название"
//           type="text"
//         />
//       </div>
//       <div className="container">
//         <div className="top">
//           <div className="location">
//             <p>{data.name}</p>
//           </div>
//           <div className="temp">
//             {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
//           </div>
//           <div className="description">
//             {data.weather ? <p>{data.weather[0].description}</p> : null}
//             <img
//               className="city-icon"
//               src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
//               alt={data.weather[0].description}
//             />
//           </div>
//         </div>

//         {data.name !== undefined && (
//           <div className="bottom">
//             <div className="feels">
//               {data.main ? (
//                 <p className="bold">{data.main.feels_like.toFixed()}°C</p>
//               ) : null}
//               <p>Чувствуется как</p>
//             </div>
//             <div className="humidity">
//               {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
//               <p>Влажность</p>
//             </div>
//             <div className="wind">
//               {data.wind ? (
//                 <p className="bold">{data.wind.speed.toFixed()} м/с</p>
//               ) : null}
//               <p>Скорость ветра</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
