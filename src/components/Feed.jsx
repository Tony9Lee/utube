import { useState, useEffect, useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, Videos } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    setVideos([]);
    setNextPageToken("");
    fetchVideos();
  }, [selectedCategory]);

  const fetchVideos = () => {
    setIsFetching(true);
    const query = `search?part=snippet&q=${selectedCategory}&maxResults=50&pageToken=${nextPageToken}`;
    fetchFromAPI(query).then((data) => {
      setVideos((prevVideos) => [...prevVideos, ...data.items]);
      setNextPageToken(data.nextPageToken);
      setIsFetching(false);
    });
  };

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextPageToken && !isFetching) {
          fetchVideos();
        }
      },
      { threshold: 1 }
    );

    if (observer.current && nextPageToken) {
      observer.current.observe(document.querySelector("#observer"));
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [nextPageToken, isFetching]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid#3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        ></Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#d62c25" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}></span>
        </Typography>

        <Videos videos={videos} />

        <div id="observer" style={{ height: 10 }} />
      </Box>
    </Stack>
  );
};

export default Feed;
