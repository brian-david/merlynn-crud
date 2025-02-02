"use server";

import dbConnect from "@/lib/dbConnect";
import Answer from "@/models/answer";

export async function submitQuestions(formData: FormData) {
	console.log(formData);
	const response = await fetch('https://api.up2tom.com/v3/decision/58d3bcf97c6b1644db73ad12', {
		method: 'POST',
		headers: {
			'Authorization': `Token 9307bfd5fa011428ff198bb37547f979`, // Replace with actual token
			'Content-Type': 'application/vnd.api+json',
		},
		body: JSON.stringify({
			"data": {
				"type": "scenario",
				"attributes": {
					"input": {
						"INPUTVAR1": formData.get("INPUTVAR1"),
						"INPUTVAR2": formData.get("INPUTVAR2"),
						"INPUTVAR3": formData.get("INPUTVAR3"),
						"INPUTVAR4": formData.get("INPUTVAR4"),
						"INPUTVAR5": formData.get("INPUTVAR5"),
						"INPUTVAR6": formData.get("INPUTVAR6"),
						"INPUTVAR7": formData.get("INPUTVAR7"),
						"INPUTVAR8": formData.get("INPUTVAR8"),
						"INPUTVAR9": formData.get("INPUTVAR9"),
					}
				}
			}
		})
	});
	const result = await response.json();
	//revalidatePath('/');
	console.log("RESULT ->", result);
	await dbConnect();
	try {
		const decisionDoc = new Answer({
			id: result.data.id,
			type: result.data.type,
			attributes: {
				input: result.data.attributes.input,
				decision: result.data.attributes.decision,
				meetsConfidence: result.data.attributes['meets-confidence'], // Ensure property name matches schema
				model: result.data.attributes.model,
				timestamp: new Date(result.data.attributes.timestamp), // Ensure correct Date conversion
				reasons: result.data.attributes.reasons,
				confidence: result.data.attributes.confidence
			}
		});
		await decisionDoc.save();
		console.log("Decision saved to database:", decisionDoc);
	} catch (error) {
		console.error("Error saving decision to database:", error);
	}
	return result;
}

export async function fetchAttributes(modelId: string) {
	const response = await fetch(`https://api.up2tom.com/v3/models/${modelId}`, {
		method: 'GET',
		headers: {
			'Authorization': `Token 9307bfd5fa011428ff198bb37547f979`, // Replace with actual token
			'Content-Type': 'application/vnd.api+json',
		},
	});
	return await response.json();
}

export async function fetchDecisions() {
	await dbConnect();
	const decisions = await Answer.find({});
	return decisions;
}