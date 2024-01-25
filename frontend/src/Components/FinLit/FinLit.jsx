import React, { useState, useEffect } from 'react'
import Markdown from "markdown-to-jsx"

function FinLit() {
	const fileName = "Budgeting.md";
	const [post, setPost] = useState("");

	useEffect(() => {
		import(`./markdown/${fileName}.md`)
			.then(res => {
				fetch(res.default)
					.then(res => res.text())
					.then(res => setPost(res));
			}).catch(err => console.log(err));
	});

	return (
		<div>
			<Markdown>
				{post}
			</Markdown>
		</div>
	);
}

export default FinLit


<<<<<<< HEAD
export default FinLit



=======
>>>>>>> a949562 (Partially fixed markdown parser)
