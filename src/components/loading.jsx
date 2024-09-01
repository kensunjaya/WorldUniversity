import { ClockLoader } from "react-spinners"

export const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex items-center justify-center"><ClockLoader color='#3C3D37' size={100} /></div>
  )
}