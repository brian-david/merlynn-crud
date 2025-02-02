import { fetchAttributes, submitQuestions } from "@/app/actions";

interface QuestionFormProps {
	modelId: string;
}

export const QuestionForm = async ({ modelId }: QuestionFormProps) => {
	const data = await fetchAttributes(modelId);
	return (
		<div className="flex-1 border-2 rounded-lg p-2">
			<form action={submitQuestions}>
				{data.data.attributes.metadata.attributes.map((item: any, index: number) => {
					if (item.domain.type === "DomainR") {
						return (
							<div key={index.toString()}>
								<label className="block text-sm font-medium text-gray-700" htmlFor={item.name}>{item.question}</label>
								<input
									className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 text-gray-950"
									id={index.toString()}
									name={item.name}
									type="number"
									min={item.domain.lower}
									max={item.domain.upper}
									step={item.domain.interval}
								/>
							</div>
						)
					}
					if (item.domain.type === 'DomainC') {
						return (
							<div key={index.toString()}>
								<label className="block text-sm font-medium text-gray-700" htmlFor={item.name}>{item.question}</label>
								<select id={index.toString()} name={item.name} className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 text-gray-950">
									<option value="" disabled>
										-- Select an option --
									</option>
									{item.domain.values.map((option: any) => (
										<option key={option} value={option}>
											{option}
										</option>
									))}
								</select>
							</div>
						);
					}
					return null;
				})}
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}