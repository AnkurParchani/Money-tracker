export default function handleClientSideError(err: unknown) {
  if (err !== null && err !== undefined) {
    // Handling all Operational errors
    if (typeof err === "object" && "message" in err) {
      return { error: err.message };
    }
  }

  return { error: "Something went wrong, please try again later." };
}
