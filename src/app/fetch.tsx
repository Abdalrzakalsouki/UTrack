// async function Fetch(req, res) {
//   if (req.method === "POST") {
//     const { IP } = req.body;
//     const KEY = process.env.KEY;
//     const response = await fetch(
//       `https://apiip.net/api/check?ip=${IP}&accessKey=${KEY}`
//     );
//     if (!response.ok) throw new Error("Could not fetch the data");
//     return res.json();
//   }
// }
