import { Router, Response, Request } from "express";

// create the instance
const dummyRouter = Router()

const contacts = [
    {name: "Chris Jimenez", celphone: "1223-324", mail: "dummy@mail.outlook.com"},
    {name: "Clhoe Ro", celphone: "123432432", mail: "dummy@mail.outlook.com"}
]

// Home
dummyRouter.get("/",(req: Request, res: Response)=>{
    res.status(200).render("index")
})

// about us
dummyRouter.get("/about-us",(req: Request, res: Response)=>{
    res.status(200).render("about")
})

// Contact
dummyRouter.get("/contact",(req: Request, res: Response)=>{
    res.status(200).render("contact",{contacts})
})


export default dummyRouter