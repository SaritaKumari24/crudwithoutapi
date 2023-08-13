
"use server";

import { redirect } from "next/navigation";
import Students from "./database/models/Students";



export const addStudent=async(formdata)=>{
    let name=formdata.get('name');
    let contact=formdata.get('contact');
    let email=formdata.get('email');
    let city=formdata.get('city');
    let data=await Students.create({name,contact,email,city})
    redirect("/")
}
export const updateStudent=async(formdata)=>{
    let name=formdata.get('name');
    let contact=formdata.get('contact');
    let email=formdata.get('email');
    let city=formdata.get('city');
    let id=formdata.get('id');
    let data=await Students.findByIdAndUpdate(id,{name,contact,email,city})
    redirect("/")
}

export const deleteStudent=async(data)=>{
    let id=data.get("id");
    let deleteData=await Students.findByIdAndDelete(id);
    redirect("/")

}