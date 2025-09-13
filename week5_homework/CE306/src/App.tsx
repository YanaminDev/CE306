import './App.css'
// import Counter from './useState';
// import NoDependency from './NoDependency'
// import EmptyDependency from './EmptyDependencyArray'
import Counters from './CounterComponent'
import UserForm from './FormComponent'
function App() {


  return (

    // <Counter initialCount={1} /> 
    // <NoDependency />

    // <EmptyDependency />
    <>
      <Counters /> <br />

      <UserForm name={''} email={''} />
    </>
    

  )
}

export default App
