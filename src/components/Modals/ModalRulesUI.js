import { Box, Stack, Button, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  background: "#EAEAEA",
  border: "1px solid #fff",
  borderRadius: 5,
  boxShadow: 24,
  p: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function ModalRulesUI() {
  const { modalName, setModalName } = useContext(AppContext);
  const handleClose = () => setModalName(null);

  return (
    <div>
      <Modal
        open={modalName}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={1} direction="column" alignItems="center">
            <Typography id="modal-modal-title" variant="h4" component="h1">
              Rules
            </Typography>
            <Typography className="modal-modal-description">
              You should answer to <strong>15</strong> questions.
            </Typography>
            <Typography className="modal-modal-description">
              Every positive answer give you <strong>1</strong> point.
            </Typography>
            <Typography className="modal-modal-description">
              Only <strong>1</strong> good answer by question.
            </Typography>
            <Typography className="modal-modal-description" align="center">
              If you make a mistake you can retry until you find a good answer.
            </Typography>
            <Typography className="modal-modal-description" align="center">
              You have a right to make <strong>3</strong> errors.
            </Typography>
            <Typography className="modal-modal-description" align="center">
              Each additional error will decrease your score by{" "}
              <strong>1</strong> point.
            </Typography>

            <Typography
              id="modal-modal-description"
              variant="h5"
              component="h2"
            >
              Good luck!
            </Typography>
          </Stack>
          <Button
            onClick={handleClose}
            variant="contained"
            size="large"
            sx={{ mt: 3, textTransform: "none" }}
            data-testid="toggle-btn"
          >
            I'm ready !
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
