import toast from "react-hot-toast";

type MyData = {
  error?: string;
  status?: string;
};

function notifyBasedOnData(data: MyData, successMsg: string) {
  if (data && data.error) {
    return toast.error(data.error);
  } else if (data && data.status === "success") {
    return toast.success(successMsg);
  } else {
    return toast.error("Something went wrong, please try again later");
  }
}

export default notifyBasedOnData;
