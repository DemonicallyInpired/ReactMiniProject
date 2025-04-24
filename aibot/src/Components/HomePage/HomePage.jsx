import { Grid, Box, Typography } from "@mui/material";
import HelperCard from "../HelperCard/HelperCard";
import { v4 } from "uuid";
import AskForm from "../AskForm/AskForm";
import { useContext, useState, useEffect } from "react";
import mockData from "../../data/mock.json";
import Message from "../Message/Message";
import { ResetContext } from "../../../utils/contexts";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [currentData, setcurrentData] = useState([]);
  const { reset } = useContext(ResetContext);
  useEffect(() => {
    setData([]);
    setcurrentData([]);
  }, [reset]);

  return (
    <Box
      sx={{
        height: "100%",
        padding: "1rem",
        maxHeight: data.length > 0 ? "80vh" : "inherit",
        overflow: "scroll",
      }}
      className="app__homePage"
    >
      {data.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography textAlign="center" variant="h5" fontWeight="bold">
              How Can I Help You Today?
            </Typography>
            <Box
              component="img"
              src="/assets/SoulAiProfile.png"
              alt="soul-ai-profile"
              sx={{
                borderRadius: "50%",
                width: { xs: "20%", md: "10%" },
                height: { xs: "20%", md: "10%" },
                marginBottom: "1rem",
              }}
            />
            <Grid spacing={2} container>
              {mockData.length > 4 &&
                mockData.slice(mockData.length - 4).map((item, index) => (
                  <Grid
                    key={`homePageQuestion-${index}`}
                    size={{ xs: 12, md: 6 }}
                  >
                    <HelperCard
                      key={`question-card-${v4()}`}
                      question={item.question}
                      setData={setData}
                      setcurrentData={setcurrentData}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      ) : (
        <Box>
          {data.map((item, index) => (
            <Message
              key={data["id"]}
              data={data[index]}
              setData={setData}
              setcurrentdata={setcurrentData}
            />
          ))}
        </Box>
      )}
      <Box
        sx={{
          minHeight: "10%",
          position: "absolute",
          bottom: { xs: -50, sm: -5 },
          width: { xs: "100%", sm: "90%", md: "80%" },
          display: "flex",
          justifyContent: "center",
          marginLeft: { xs: "-1rem", sm: "0rem" },
          zIndex: 500,
          height: "18%",
        }}
      >
        <AskForm
          currentData={currentData}
          setData={setData}
          setcurrentData={setcurrentData}
        />
      </Box>
    </Box>
  );
}
