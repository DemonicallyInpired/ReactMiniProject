import { Grid, Typography } from "@mui/material";
import { useMemo } from "react";
import BlogCard from "./BlogCard";
const getBlogData = () => {
  return Array.from({ length: 3 }).map((item, index) => {
    return {
      date: "March 3, 2021",
      image: "/assets/blog.png",
      description: "6 Tips To Protect Your Mental Health When You're Sick",
      authorName: "Rebecca Lee",
      authorImage: "/assets/person.png",
      category: "Medicine",
    };
  });
};
export default function BlogAndNews() {
  const blogData = useMemo(() => getBlogData(), []);
  return (
    <Grid sx={{ maxWidth: "80vw", margin: "2rem auto" }} container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <Typography
          textAlign="center"
          sx={{ mt: "2rem" }}
          variant="h6"
          color="primary"
        >
          Blog &amp; News
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Typography textAlign="center" variant="h2">
          Read Our Latest News
        </Typography>
      </Grid>
      {blogData.map((item, index) => {
        const { date, image, description, authorName, authorImage, category } =
          item;
        return (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={`blog-card-${index}`}>
            <BlogCard
              date={date}
              image={image}
              description={description}
              authorName={authorName}
              authorImage={authorImage}
              category={category}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
