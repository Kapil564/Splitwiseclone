import {NextResponse} from "next/server";

import nodemailer from "nodemailer"

export async function POST(request) {
    const body = await request.json()
    const message={
        from : process.env.EMAIL,
        to : body.to,
        subject : "Invitation from the BillBuddy",
        html : body.html,
        headers:{
            "X-Entity-Ref-ID":"newmail",
        }
    }
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        tls:{
            rejectUnauthorized: false
        }
    })
    try{
    await transporter.sendMail(message)
    return NextResponse.json({message:"Email sent successfully"})
    }catch{
        return NextResponse.json({message:"error in route.js"})
    }

}