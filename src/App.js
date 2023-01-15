import Note from './components/Note';
import { useState } from 'react';
import Header from './components/Header';
function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<Header count={count} setCount={setCount} />
			<Note count={count} setCount={setCount} />
		</>
	);
}

export default App;
