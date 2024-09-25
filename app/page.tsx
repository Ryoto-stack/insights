import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-[#090b1a]">
      <main className=" w-[1100px] h-[455px] flex items-center justify-center bg-[#1b1938] rounded-lg">
        <div className="grid grid-cols-2  items-center ">
          <div className="flex items-center flex-col p-14 text-white">
            <h1 className="text-left text-5xl font-bold mb-6">Get <span className="text-purple-600">insights</span> that help your business grow.</h1>
            <p className="mb-15 text-left w-auto">Discover the beneifts of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            <div className="grid grid-cols-3 mt-10 gap-14 	">
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold">10k+</h1>
                <p className="font-bold">COMPANIES</p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold">314</h1>
                <p className="font-bold">TEMPLATES</p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold">12M+</h1>
                <p className="font-bold">QUERIES</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-full overflow-hidden">
            <div className="relative w-full h-full">
              <Image 
                src="/meeting.jpg"
                
                width={640} 
                height={550} 
                alt="meeting"
                className="object-cover rounded-r-lg" 
              />
              <div className="absolute inset-0 rounded-r-lg bg-[#aa5cdb] opacity-50" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
