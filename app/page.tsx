import {QuestionForm} from "@/app/question-form";
import {ResultContainer} from "@/app/result-container";

export default async function Home() {
	return (
		<main>
			<h1 className="mb-4">Merlynn Assessment</h1>
			<div className="flex gap-4">
				<QuestionForm modelId="58d3bcf97c6b1644db73ad12"/>
				<ResultContainer/>
			</div>
		</main>
	);
}
