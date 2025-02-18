import { read } from "$app/server";
import somefile from "$lib/test.txt";

export async function GET() {
	const asset = read(somefile);
	const text = await asset.text();

	return new Response(text);
}
