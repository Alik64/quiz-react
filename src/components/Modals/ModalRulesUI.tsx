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
  const { setModalName } = useContext(AppContext);
  const handleClose = () => setModalName(null);

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={1} direction="column" alignItems="center">
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h1"
              gutterBottom
            >
              Rules
            </Typography>
            <Typography className="modal-modal-description">
              You should answer <strong>15</strong> questions.
            </Typography>
            <Typography className="modal-modal-description">
            Each correct answer earns you <strong>1</strong> point.
            </Typography>
            <Typography className="modal-modal-description">
            There is only  <strong>1</strong> correct answer per question.
            </Typography>
            <Typography className="modal-modal-description" align="center">
            You may continue to attempt to answer correctly until you find the right answer.
            </Typography>
            <Typography className="modal-modal-description" align="center">
            You are allowed up to <strong>3</strong> incorrect answers without penalty.
            </Typography>
            <Typography className="modal-modal-description" align="center">
              Each error beyond the initial 3 will reduce your score by <strong>1</strong> point.
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
