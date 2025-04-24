import { Avatar, Paper, Box, Typography, Rating } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
export default function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const currData = localStorage.getItem("conversations");
    if (!Object.is(currData, null)) {
      setData(() => JSON.parse(currData));
    }
  }, []);

  const tuplePair = useMemo(() => {
    const res = [];
    data.forEach((item, index) => {
      if (index % 2 === 0) {
        res.push([data[index], data[index + 1]]);
      }
    });
    return res;
  }, [data]);

  return data.length === 0 ? (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      No Converstations Yet
    </Box>
  ) : (
    <Box
      sx={{
        padding: "1rem",
        maxHeight: "100vh",
      }}
    >
      <Box sx={{ fontSize: "2rem" }}>Past Conversations</Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxHeight: "70vh",
          // overflowY: "scroll",
          // overflowX: "hidden",
          marginTop: "1rem",
        }}
        className="homePage__scrollbar"
      >
        {tuplePair.map((item, index) => {
          return (
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "1rem",
                backgroundColor: "background.primary",
              }}
              key={`tuppleMapping-${index}`}
              elevation={10}
            >
              {item.length > 0 &&
                item.map((item1, index) => {
                  if (item1) {
                    const {
                      question,
                      response,
                      type,
                      timeStamp,
                      id,
                      ratings,
                      feedback,
                    } = item1;
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                        key={`converstation-${id}-${index}`}
                      >
                        <Avatar
                          src={
                            type === "AI"
                              ? "/assets/SoulAiProfile.png"
                              : "/assets/Human.png"
                          }
                          alt={`${type}-pic`}
                        />
                        <Box>
                          <Typography fontWeight="bold" component="span">
                            {type === "AI" ? "Soul AI" : "You"}
                          </Typography>
                          <Typography variant="body1">
                            {type === "AI" ? response : question}
                          </Typography>
                          <Box sx={{ display: "flex", gap: "1rem" }}>
                            <Typography component="span" variant="body1">
                              {timeStamp}
                            </Typography>
                            {ratings && (
                              <Rating defaultValue={ratings} disabled />
                            )}
                          </Box>
                          {feedback && (
                            <Box>
                              <Typography
                                component="span"
                                variant="body1"
                                fontWeight="bold"
                              >
                                Feedback:
                              </Typography>
                              <Typography component="span" variant="body1">
                                {feedback}
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      </Box>
                    );
                  }
                })}
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
}
