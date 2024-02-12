import connectDb from "@/utils/connectDb";
import { NextResponse } from "next/server";
import multer from "multer";

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
export async function POST(req) {
    try {
        const { name, address, city, state, contact, email_id } = await req.json()
        const imageFilename = '';

        if (!name || !city || !state || !email_id) {
            return NextResponse.json({
                message: 'Name, city, state, email_id are required.'
            }, { status: 400 })
        }
        // const upload = multer({ dest: 'public/schoolImages' })
        // // const { image } = await upload.single('image')(req, res);
        // // const imageFilename = image ? image.filename : '';
        const [result] = await connectDb.query(
            `insert into schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [name, address, city, state, contact, imageFilename, email_id]
        );
        return NextResponse.json({ message: "School added successfully" }, { status: 201 })
    } catch (err) {
        // console.log(err);
        NextResponse.json({ message: "Error adding school" }, { status: 500 })
    }
}
