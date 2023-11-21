"use client";

import { useRouter } from "next/navigation";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

import { signup } from "../actions/authActions";
import Input from "../../components/Input";
import Button from "../../components/Button";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";

const Form = () => {
  const router = useRouter();

  async function handleSubmit(event: FormData) {
    const data = await signup(event);

    notifyBasedOnData(data, "Successfully registered");
    if (data.status === "success") {
      router.push("/");
    }
  }

  return (
    <>
      <form
        autoComplete="off"
        action={handleSubmit}
        className="flex flex-col gap-3 mt-5"
      >
        <div className="text-center mb-5 cursor-pointer">
          <AddAPhotoIcon
            style={{
              color: "#fff",
              fontSize: "60px",
              backgroundColor: "#94a3b8",
              borderRadius: "9999px",
              padding: "12px",
            }}
          />
        </div>

        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          defalutNoLabelInput
        />

        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          defalutNoLabelInput
        />

        <Input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          defalutNoLabelInput
        />

        <Input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="Confirm Password"
          defalutNoLabelInput
        />

        <Button submit authButton>
          Signup
        </Button>
      </form>
    </>
  );
};

export default Form;
