import React from 'react'
import Checkbox from '@mui/material/Checkbox';


export default function WordList({ words }) {
	return <ul>
		{words.map((item, index) => {
			return <li key={item.id}>

				<Checkbox />
				<p className="numberWord">
					{index + 1}
				</p>
				<p className="ukrWord">
					{item.uaWord}
				</p>
				<p className="enWord">
					{item.enWord}
				</p>
				<button >DELETE</button>
				<button >EDIT</button>
			</li>
		})}
	</ul>
}
