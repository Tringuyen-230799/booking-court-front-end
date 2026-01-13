export const getCourts = async () => {
  const res = await fetch("http://localhost:8080/courts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courts");
  }

  return res.json(); // <-- return parsed data here
};
