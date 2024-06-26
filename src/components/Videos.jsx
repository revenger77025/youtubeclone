// import { Box, Stack } from '@mui/material';
// import React from 'react';
// import { ChannelCard, VideoCard } from './';




// const Videos = ({ videos }) => {

//      console.log(videos);
//   return (
//     <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
//         {videos.map((item,idx) => (
//             <Box key={idx}>
//                 {item.id.videoId && <VideoCard video={item} /> }
//                 {item.id.channelId && <ChannelCard channelDetail={item} /> }

//             </Box>
//         ))}
//     </Stack>
//   );
// };

// export default Videos;


import { Box, Stack } from "@mui/material";
import React from "react";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;


