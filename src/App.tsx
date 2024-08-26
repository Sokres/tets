import './App.css';
import { data } from './data';
import Table from './components/Table';

function App() {
	return (
		<>
			<Table data={data} />
		</>
	);
}

export default App;
