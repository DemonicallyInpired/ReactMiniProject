import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const questions = [
  "Why choose our medical for your family?",
  "Why we are different from others?",
  "Trusted & experience senior care & love",
  "How to get appointment for emergency case?",
];
const StatsCard = ({ type, src }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
        boxShadow: "0px 0px 6px #222",
        maxWidth: "fit-content",
        padding: "1rem",
        borderRadius: type === "square" ? "15px" : "50%",
        position: "absolute",
        top: type === "square" ? "50%" : "25%",
        left: type === "square" ? "-10%" : "",
        right: type === "circle" ? "-5%" : "",
        width: type === "square" ? "fit-content" : "2.5rem",
        height: type === "square" ? "fit-content" : "2.5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: type === "circle" ? "center" : "flex-start",
        }}
      >
        <img src={src} alt="smile-image" />
        {type === "square" ? <Typography variant="h6">84k+</Typography> : null}
      </Box>
      {type == "square" ? (
        <Typography component="span">Happy Patients</Typography>
      ) : null}
    </Box>
  );
};
export default function Faqs() {
  return (
    <Box sx={{ padding: "1rem" }}>
      <Grid sx={{ maxWidth: "80vw", margin: "auto" }} spacing={2} container>
        <Grid size={{ xs: 12 }}>
          <Typography
            textAlign="center"
            variant="h6"
            fontWeight="bold"
            color="primary"
          >
            Get Your Answers
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography textAlign="center" color="secondary" variant="h2">
            Frequently Asked Questions
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, lg: 6 }}
          sx={{
            backgroundImage: `url('/assets/faqs.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
            position: "relative",
            boxShadow: "0px 0px 6px #222",
            border: "4px solid #fefefe",
          }}
        >
          <StatsCard type="square" src={"/assets/Smile.svg"} />
          <StatsCard type="circle" src={"/assets/Heart.svg"} />
        </Grid>
        <Grid
          sx={{ padding: { md: "6rem", xs: "0rem" }, alignContent: "center" }}
          size={{ xs: 12, lg: 6 }}
        >
          {questions.map((item, index) => (
            <Accordion>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls={`pannel${index}-content`}
                id={`pannel${index}-header`}
              >
                <Typography component="span">{item}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid culpa fugiat assumenda autem itaque esse molestias
                voluptatem, quas aspernatur doloribus veritatis facere maxime
                eum dolores. Impedit neque reprehenderit molestiae tempora.
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
