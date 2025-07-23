import SlideBar from "@/Components/AdminComponents/SlideBar";

export default function Layout({children}){
  return(
    <>
      <div className="flex">
        <SlideBar/>
      </div>
      {children}
    </>
  )
}