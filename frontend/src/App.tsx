import { RouterProvider } from "react-router-dom"
import RootRouter from "./routing/mainroute"
function App() {
  return (
    <RouterProvider router = {RootRouter}>
    </RouterProvider>
  )
}
export default App