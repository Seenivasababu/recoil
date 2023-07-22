
import { Button, Card,Typography } from '@mui/material';
import './App.css';
import { RecoilRoot , atom, useRecoilValue, useSetRecoilState} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div style={{ display:'flex', justifyContent:'center'}}>
          <Card style={{ margin:60, padding:20, width:500}}> 
              <Typography variant='h5' padding={2} textAlign={'center'}> Welcome To counter game </Typography>
              <Buttons />
              <CountComponent />  
          </Card>
      </div>
    </RecoilRoot>
  );
}

const Buttons = () =>{
  return (
  <div style={{ display:'flex', justifyContent:'space-between' }}>
    <Increment/>
    <Decrease/>
  </div>)
}

const Increment = () =>{
  const setCount = useSetRecoilState(countState)
  return <div>
    <Button variant='contained' onClick={()=>{setCount(e=>e+1)}}>
      Increase Cunter
    </Button>
  </div>
}
const Decrease = () =>{
  const setCount = useSetRecoilState(countState)
  return <div>
  <Button variant='contained' onClick={()=>{setCount(e=>e-1)}}>
    Decrease Cunter
  </Button>
</div>
}
const CountComponent = () =>{
  const count = useRecoilValue(countState)
  return <div>
      <Typography variant='h5' textAlign={'center'}> {count} </Typography>
  </div>
}


export default App;

const countState = atom({
  key:'countState',
  default:0
})