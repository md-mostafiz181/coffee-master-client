
import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './components/Shared/Navbar/Navbar';
import CoffeeCard from './components/CoffeeCard/CoffeeCard';

function App() {

  const coffees = useLoaderData();
  console.log(coffees)

  return (
    <>
 
      
      <Navbar></Navbar>
      <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-2'>
        {
          coffees.map(coffee=> <CoffeeCard
             key={coffee._id}
             coffee={coffee}
             ></CoffeeCard>)
        }
      </div>
      <Outlet></Outlet>

    </>
  )
}

export default App
