import React from "react";

function AboutCards(props) {

	const name = props.name;
	const image = props.image;
	const position = props.position;
	const description = props.description;
	const linkedin = props.linkedin;
	const github = props.github;


	return (
		<div>
			<div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
				<div className="flex items-center gap-x-4">
					<img
						className="rounded-full w-20 h-20"
						src={image}
						alt="Image Description"
					/>
					<div className="grow">
						<h3 className="font-medium text-gray-800 dark:text-gray-200">
							{name}
						</h3>
						<p className="text-xs uppercase text-gray-500">{position}</p>
					</div>
				</div>

				<p className="mt-3 text-gray-500">
					{description}
				</p>
			</div>
		</div>
	);
}

export default AboutCards;
