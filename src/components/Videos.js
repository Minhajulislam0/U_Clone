import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

export default function Videos({ videos }) {
  return (
    <Stack
      alignContent="flex-start"
      flexWrap="wrap"
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      gap={1}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}
