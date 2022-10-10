
import './App.css'
function App() {

  const pyramidValues = [
    {id: 1, amount: '$100'},
    {id: 2, amount: '$200'},
    {id: 3, amount: '$300'},
    {id: 4, amount: '$500'},
    {id: 5, amount: '$1000'},
    {id: 6, amount: '$2000'},
    {id: 7, amount: '$10,000'},
    {id: 8, amount: '$25,000'},
    {id: 9, amount: '$100,000'},
    {id: 10, amount: '$500,000'}
  ]
  return <div className="app">
    <div className="pyramid">
      <div className="items">
       {pyramidValues.reverse().map(item =>(
          <h2 className='item'>{item.amount}</h2>
       ))}
      </div>
    </div>
    <div className="main"> main</div>
  </div>;
}

export default App;
