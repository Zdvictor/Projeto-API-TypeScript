import  express  from "express"
import router from "../routes/routes"
import { setupSwagger } from "../swagger"

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

setupSwagger(app)

app.use('/', router)


export default app