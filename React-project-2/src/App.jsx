import './App.css'
import Accordion from './Components/Accordion';
import AlertComp from './Components/AlertComp';
import Counter from './Components/Counter';
import MovieCard from './Components/MovieCard';
import ProfileCard from './Components/ProfileCard'
import ReusableButton from './Components/ReusableButton';

function App() {

  //button properties
  //color 
  const color = "red";
  const size = "sm";

  const type = {
    error: "error",
    success: "success",
    warning: "warning",
  };
  const message = {
    error: "This is an error message",
    success: "This is a success message",
    warning: "This is a warning message",
  };

  return (
    <>
      <section className='bg-gray-900'>
        <h1 className='text-4xl font-bold text-white text-center bg-gray-800 p-5'>React Practice Playground</h1>
        <ProfileCard />
        <ReusableButton color={color}   size={size}>Click Me</ReusableButton>
        <MovieCard />
        <AlertComp type={type.success} message={message.success}/>
        <Counter />
        <Accordion />
      </section>
    </>
  )
}

export default App
