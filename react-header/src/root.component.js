import { ReactContainer } from './components/ReactContainer'
import { Topbar } from './components/Topbar'
import { Slider } from './components/Slider'

export default function Root(props) {
  return (
    <ReactContainer>
      <Topbar />
      <Slider />
    </ReactContainer>
  )
}
