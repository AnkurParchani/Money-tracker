"use client";

import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UpdateTransactionForm from "./UpdateTransactionForm";
import DeleteTransactionForm from "./DeleteTransactionForm";

const options = [
  { text: "Update", modalType: "update-transaction" },
  { text: "Delete", modalType: "delete-transaction" },
];

const EditMenuButton = ({ transaction }: { transaction: Transaction }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [modalType, setModalType] = React.useState<string>("");
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (e.target instanceof HTMLElement) {
      const action = e.target.dataset.action;
      setModalType(action as string);
    }
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        style={{ padding: "0px" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option.text}
            onClick={handleClose}
            style={{ fontSize: "14px", padding: "0px 20px" }}
            data-action={option.modalType}
          >
            {option.text}
          </MenuItem>
        ))}
      </Menu>

      {/* For Update Account */}
      {modalType === "update-transaction" && (
        <UpdateTransactionForm
          transaction={transaction}
          setModalType={setModalType}
        />
      )}

      {/* For Updating Password */}
      {modalType === "delete-transaction" && (
        <DeleteTransactionForm
          transaction={transaction}
          setModalType={setModalType}
        />
      )}
    </div>
  );
};

export default EditMenuButton;
