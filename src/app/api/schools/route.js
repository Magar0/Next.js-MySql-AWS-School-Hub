import connectDb from "@/utils/connectDb";
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises'

//GET all school data
// export async function GET() {
//     try {
//         const [result] = await connectDb.query(
//             'Select * from schools'
//         );
//         console.log(result);
//         return NextResponse.json({ message: "School added successfully" }, { status: 201 })
//     } catch (err) {
//         // console.log(err);
//         NextResponse.json({ message: "Error adding school" }, { status: 500 })
//     }
// }


//add schools
export async function POST(req, res) {
    try {
        // const { selectedImage, otherData } = await req.json()
        // const { name, address, city, state, contact, email_id } = otherData
        const formData = await req.formData()
        const name = formData.get("name")
        const city = formData.get("city")
        const state = formData.get("state")
        const contact = formData.get("contact")
        const email_id = formData.get("email_id")
        const address = formData.get("address")
        const imageFile = formData.get("image")

        // console.log({ name, city, state, contact, email_id, address, imageFile });
        // console.log(contact);

        if (!name || !city || !state || !email_id) {
            return NextResponse.json({
                message: 'Name, city, state, email_id are required.'
            }, { status: 400 })
        }

        //creating new buffer for image
        let image = ""
        if (imageFile) {
            const byteData = await imageFile.arrayBuffer();
            const buffer = Buffer.from(byteData);
            const filename = Date.now() + imageFile.name
            const path = `./public/schoolImages/${filename}`
            await writeFile(path, buffer)
            image = imageFile ? path : '';
        }
        const [result] = await connectDb.query(
            `insert into schools (name, address, city, state, contact, image, email_id) values (?, ?, ?, ?, ?, ?, ?)`,
            [name, address, city, state, contact, image, email_id]
        );

        return NextResponse.json({ message: "School added successfully" }, { status: 201 })
    } catch (err) {
        console.log(err);
        if (err.sqlMessage) {
            return NextResponse.json({ message: err.sqlMessage }, { status: 400 })
        }
        NextResponse.json({ message: "Error adding school" }, { status: 500 })
    }
}
