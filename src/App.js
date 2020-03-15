import React, { useEffect, useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => {
    // レンダリングの後に実行される 
    console.log("this is like componentDidMount or componentDidUpdate.")
  })

  useEffect(() => {
    // 初期表示時にのみ実行される 
    console.log("this is like componentDidMount")
  }, [])

  useEffect(() => {
    // nameの更新後にのみ実行される 
    console.log("this callback is for name only")
  }, [name])

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() =>  setState(props)}>reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}></input>
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App
