import NextAuth from "next-auth/next";

const handler =(req,res)=>NextAuth(req,res)

module.exports={
    GET:handler,
    POST:handler
}