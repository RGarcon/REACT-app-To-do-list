import './App.css';
import React, {useState} from 'react';
import '../node_modules/bulma/css/bulma.min.css'
import Header from './Composants/Header/Header';
import Card from './Composants/Header/Card/Card';

function App() {

  const [monState, setMonState] = useState (
    []
  )

  const [tache, setTache] = useState();
  const [txt, setTxt] = useState();

  function creationCarte (e) {
    e.preventDefault ();
    const nvTab = [...monState, {tache: tache, txt: txt}]
    setMonState(nvTab)
    setTache('');
    setTxt('');
  }

  function suppCarte (index) {

    const tabNettoyage = [...monState];

    setMonState(tabNettoyage.filter(item => tabNettoyage.indexOf(item) !== tabNettoyage.indexOf(tabNettoyage[index])))


  }


  return (
    <div>
      <Header />

      <div className='container px-3'>

        <h2 className='title mt-5'>
          Rentrez vos taches a faire
        </h2>

        <form onSubmit={creationCarte}>
          <div className='field'>
            <div className='control'>
              <label htmlFor='tache' className='label'> Tache </label>
              <input
              value = {tache} 
              type='text' 
              id='tache' 
              placeholder='Une tache a faire' 
              className='input' 
              onChange={e => setTache(e.target.value)}
              ></input>
            </div>
          </div>

          <div className='field'>
            <div className='control'>
              <label htmlFor='txt' className='label'> Contenu de la tache </label>
              <textarea 
              value = {txt} 
              type='text' 
              id='txt' 
              placeholder='Une tache a faire' 
              className='textarea'
              onChange={e => setTxt(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className='control'>
            <button type='submit' className='button is-link'>
              Creer une tache
            </button>
          </div>
        </form>

        {
          //map retourne un nouveau tableau apres avoir fait une action sur celui de base
          monState.map((todo, index)=> (
            <Card
            key = {index}
            index = {index}
            tache = {todo.tache}
            txt = {todo.txt}
            supprFunc = {suppCarte}

            />
          ))
        }

      </div>

    </div>
  );
}

export default App;
