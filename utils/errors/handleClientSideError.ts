export default function handleClientSideError(err: unknown) {
  console.log("Error from handleClientSideError", err);

  if (err !== null && err !== undefined) {
    // Handling all Operational errors
    if (typeof err === "object" && "message" in err) {
      return { error: err.message };
    }
  }

  return { error: "Something went wrong, please try again later." };
}
