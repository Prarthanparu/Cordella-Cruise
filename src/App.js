import { useState } from "react"
import Heading from "./components/Heading"
import Availablevisible from "./components/Availablevisible"
import Pagecontent from "./components/Pagecontent"
import Details from "./components/Details";
import Form from "./components/Form";

function App() {

	const [selection, setSelection] = useState([])

	for (let i = 0; i <= 35; i++) {
		selection.push(true)
	}


	const toggleButton = (i) => {
		let temp = selection
		temp.map((item, index) => {
			if (index == i) {
				selection[i] = !temp[i];
			}
		})
		setSelection([...temp])
	}

	return (
		<div className="md:pt-10 md:pl-10 pt-2 pl-2">
			<Heading />
			<Availablevisible />
			<Pagecontent toggleButton={toggleButton} selection={selection} />
			<Details/>
      			<p className="pt-10 pb-10 ml-36 text-sm text-base text-gray-500 md:pt-1 pb-1 ml-10 text-xs">Please Provide Following Details for Web Check in</p>
     	    <Form/> 
			
     		{/* <Footer/> */}
		</div>
	)
}

export default App;