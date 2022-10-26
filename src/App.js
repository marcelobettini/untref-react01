import './App.css';
import data from './data/data'
import Recipe from './components/Recipe';

function App() {
  return (
    <main className='container'>
      {data.map((recipe) => (
        <Recipe key={recipe.id}{...recipe} />
      ))}

    </main>
  );
}

export default App;
