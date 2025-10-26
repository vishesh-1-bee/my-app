import Image from "next/image"

const home = () => {
  return <h1>
    we are in the home pge

    <div className=" mt-4 flex flex-wrap shrink-0 gap-5 w-1/2 justify-center items-center mx-auto">

      <div className="flex rounded-md flex-col text-black bg-amber-300 justify-center p-9 items-center text-sm">
        <Image src='/ai_gen_img_1.png' width={60} height={60} alt="img" className=" rounded-full"/>
        <h2 className="mt-4 text-xl font-semibold">Tecnical Manoj</h2>
        <h5 className="text-sm mt-3">Frontend Developer</h5>
      </div>

        <div className=" relative h-2 w-2 flex rounded-md flex-col text-black bg-amber-300 justify-center  items-center text-sm">
        <Image src='/ai_gen_img_1.png' alt="pic" fill={true} />
      </div>

        <div className="flex rounded-md flex-col text-black bg-amber-300 justify-center p-9 items-center text-sm">
        <h1 className=" bg-purple-400 p-4 font-bold mt-4 rounded-full">TT</h1>
        <h2 className="mt-4 text-xl font-semibold">Tecnical Manoj</h2>
        <h5 className="text-sm mt-3">Frontend Developer</h5>
      </div>

        <div className="flex rounded-md flex-col text-black bg-amber-300 justify-center p-9 items-center text-sm">
        <h1 className=" bg-purple-400 p-4 font-bold mt-4 rounded-full">TT</h1>
        <h2 className="mt-4 text-xl font-semibold">Tecnical Manoj</h2>
        <h5 className="text-sm mt-3">Frontend Developer</h5>
      </div>


        <div className="flex rounded-md flex-col text-black bg-amber-300 justify-center p-9 items-center text-sm">
        <h1 className=" bg-purple-400 p-4 font-bold mt-4 rounded-full">TT</h1>
        <h2 className="mt-4 text-xl font-semibold">Tecnical Manoj</h2>
        <h5 className="text-sm mt-3">Frontend Developer</h5>
      </div>


        <div className="flex rounded-md flex-col text-black bg-amber-300 justify-center p-9 items-center text-sm">
        <h1 className=" bg-purple-400 p-4 font-bold mt-4 rounded-full">TT</h1>
        <h2 className="mt-4 text-xl font-semibold">Tecnical Manoj</h2>
        <h5 className="text-sm mt-3">Frontend Developer</h5>
      </div>

    </div>
    
  </h1>
  

}
export default home