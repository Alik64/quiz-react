import { Box, Stack, Button, Modal, Typography, Link } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

export const showYourSkill = (number, err) => {
  switch (true) {
    case err > 4:
      return "Too many errors to rate your skill, try again! 🖖";
    case number === null:
      return "Warning: Can't use 'null' as an argument.";
    case isNaN(number):
      return `Warning: "${number}" is a String, should only use an integer!`;
    case number < 0:
      return "RTFM right now! 🤬";
    case number < 5:
      return "Noob 👎";
    case number < 8:
      return "Beginner 👶";
    case number < 10:
      return "Advanced 👍";
    case number < 13 || (number === 15 && err > 1):
      return "Pro 👨🏻‍💻";
    case number < 15 || (number === 15 && err === 1):
      return "Master ⚛️";
    case number === 15 && err === 0:
      return "Kill it man! 🚀";
    case number > 15:
      return `Warning:${number} is out of range, How could you get it 🤔?!?!?`;
  }
};

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

export default function ModalResultUI() {
  const { setModalName, good, setGood, err, setErr, setScore, score } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleClose = () => {
    setModalName(null);
    setScore(0);
    setGood(0);
    setErr(0);
    navigate("/");
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={3} direction="column" alignItems="center">
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h1"
              gutterBottom
            >
              You did it!
            </Typography>

            <Typography className="modal-modal-description" variant="h5">
              Good answers: {good}
            </Typography>
            <Typography className="modal-modal-description" variant="h5">
              Errors: {err}
            </Typography>
            <Typography className="modal-modal-description" variant="h5">
              Your score : {score}
            </Typography>
            <Typography
              className="modal-modal-description"
              variant="h5"
              align="center"
            >
              Your rating :{" "}
            </Typography>
            <Typography variant="h5" sx={{ color: "darkblue" }} align="center">
              {showYourSkill(score, err)}
            </Typography>
            <Link
              underline="hover"
              target="_blank"
              rel="noreferrer"
              href="https://reactjs.org/"
            >
              Here you can RTFM
            </Link>
          </Stack>
          <Button
            onClick={handleClose}
            variant="contained"
            size="large"
            sx={{ mt: 3, textTransform: "none" }}
            data-testid="toggle-btn"
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
