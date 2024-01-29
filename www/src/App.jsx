import AuthPage , { sendLogin } from '../../'
import '../../dist/index.css'

function App() {
  return (
    <>
      <AuthPage authOpen={false} sendLogin={sendLogin} baseURL={'http://localhost:3000'} loginEndpoint={'/auth/login'} ></AuthPage>
    </>
  )
}
export default App
