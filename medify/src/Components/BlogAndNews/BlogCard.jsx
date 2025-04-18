import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
export default function BlogCard({
  date,
  image,
  description,
  authorImage,
  authorName,
  category,
}) {
  const cardHeading = `${date} | ${category}`;
  return (
    <Card variant="outlined">
      <CardMedia height={400} component="img" src={image} alt={`blog-image`} />
      <CardHeader subheader={cardHeading} />
      <CardContent>
        <Typography variant="h5">{description}</Typography>
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Avatar alt={authorName} src={authorImage} />
          <Typography component="span">{authorName}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
