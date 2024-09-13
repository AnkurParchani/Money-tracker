import supabase, { supabaseUrl } from "../../../lib/supabase";
import handleClientSideError from "../../../utils/errors/handleClientSideError";

// Function to upload the user img
export const uploadUserImg = async (e: FormData) => {
  try {
    const img = e.get("img");

    // @ts-ignore
    const imgName = `${Math.random()}-${img.name}`.replaceAll("/", "");
    const imgPath = `${supabaseUrl}/storage/v1/object/public/users/${imgName}`;

    const { error } = await supabase.storage
      .from("users")
      .upload(imgName, img as FormDataEntryValue);

    if (error) {
      throw new Error("Something went wrong while uploading the image");
    }

    return imgPath;
  } catch (err) {
    return handleClientSideError(err);
  }
};

// Function to upload the transaction img
export const uploadTransactionImg = async (e: FormData) => {
  try {
    const img = e.get("img");

    // @ts-ignore
    const imgName = `${Math.random()}-${img.name}`.replaceAll("/", "");
    const imgPath = `${supabaseUrl}/storage/v1/object/public/transactions/${imgName}`;

    const { error } = await supabase.storage
      .from("transactions")
      .upload(imgName, img as FormDataEntryValue);

    if (error) {
      throw new Error("Something went wrong while uploading the image");
    }

    return imgPath;
  } catch (err) {
    return handleClientSideError(err);
  }
};
