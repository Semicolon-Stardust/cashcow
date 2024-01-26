import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from "markdown-to-jsx"

// const Post = () => {
// 	const [postContent, setPostContent] = useState('');

// 	useEffect(() => {
// 		import("../markdown/Budgeting.md")
// 			.then(res => {
// 				fetch(res.default)
// 				.then(response => response.text())
// 				.then(text => setPostContent(response))
// 				.catch(err => console.log(err))
// 			})
// 	})

// 	return (
// 		<div className='post-wrapper'>
// 			<Markdown>{postContent}</Markdown>
// 		</div>
// 	)
// }

function FinLit() {
	return (
		<div>FinLit</div>
	)
}

export default FinLit