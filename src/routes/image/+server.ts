import { read } from "$app/server";
import somefile from "$lib/Fduck.jpg";

export async function GET() {
	const asset = read(somefile);
	const img = await asset.arrayBuffer();

	return new Response(img);
}
