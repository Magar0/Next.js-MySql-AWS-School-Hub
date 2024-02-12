import connectDb from "@/utils/connectDb";
import Navbar from "./components/navbar/Navbar";
import SchoolCard from "./components/card/Card";

export default async function Home() {

  // const response = await fetch('http://localhost:3000/api/schools')

  const [data] = await connectDb.query(
    'Select * from schools'
  );

  return (
    <>
      <Navbar />
      <div className="card-list">
        {data &&
          data.map(e => (
            <SchoolCard key={e.id} school={e} />
          ))
        }
      </div>
    </>
  );
}
