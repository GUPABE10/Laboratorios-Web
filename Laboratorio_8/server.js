let express = require("express")
let morgan = require("morgan")
let path = require("path")

let app = express()


let reservaciones=[]
let listaDeEspera=[]
let =[]


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static('public'))


//middleware
/*function logger(req,res,next){
    console.log("Request received")
    next()
}*/



//app.use(logger)

app.get("/", (req,res)=>{
    //res.send("Bienvenido")
    res.sendFile(path.join(__dirname,"home.html"))
})

app.get("/reserve", (req,res)=>{
    res.sendFile(path.join(__dirname,"reserve.html"))
})

app.get("/tables", (req,res)=>{
    res.sendFile(path.join(__dirname,"tables.html"))
})

app.get("/api/tables", (req,res)=>{
    return res.json(reservaciones);
})

app.get("/api/waitList", (req,res)=>{
    return res.json(listaDeEspera);
})

app.get("/api/clear", (req,res)=>{
    return res.json(limpio);
})

////////////
app.post("/api/tables", (req,res)=>{
    let nuevaReserva = req.body;
    console.log(nuevaReserva)

    console.log(reservaciones.length)
    if (reservaciones.length < 5) {
        reservaciones.push(nuevaReserva)
    } else {
        listaDeEspera.push(nuevaReserva)
    }

    res.json(nuevaReserva)
})


app.post("/api/clear", (req,res)=>{
    reservaciones=[]
    listaDeEspera=[]
    res.json(nuevaReserva)
})

app.listen(3000, ()=>{
    console.log("Servidor en el puerto 3000")
})