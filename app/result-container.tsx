import { fetchDecisions } from "./actions";

export const ResultContainer = async () => {
	const data = await fetchDecisions();
	console.log("data -> ", data)
	return (
		<div className="flex-1 border-2 rounded-lg p-2">
			{data.map((item: any, index: number) => (
				<p key={index.toString()}>{item.attributes.decision}</p>
			),)}
		</div>
	)
}