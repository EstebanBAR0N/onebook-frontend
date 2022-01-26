import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useFetch from "../../context/useFetch";
import { useTheme } from "@material-ui/core/styles";


function UserImageList(props) {
  const theme = useTheme();

  // fetch quelques les X premieres images du user pour avoir un apercu de ses travaux
  const limit = 10;
  const [url, setUrl] = useState(null);

  console.log(url);

  useEffect(() => {
    const newURL = 'http://localhost:4000/api/file?limit='
      + limit
      + '&offset=0'
      + '&userId='
      + props.userId
      + '&format=image';

    setUrl(newURL);

  }, [url]);


  let { data: images } = useFetch(url, false);
  console.log("images du user ", props.userId, " : ", images)


  return (
    // horizontal user image list
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '91%',
    }}>
      {/* image list container */}
      <ImageList gap={100} sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '90vw',
        height: '15em',
      }}>
        {/* image */}
        {images && images.map((image) => (
          <ImageListItem key={image.id}>
            <Box
              onClick={props.onClick}
              component="img"
              src={image.url}
              srcSet={image.url}
              alt='image'
              sx={{
                marginLeft: { xs: (image.id === images[0].id ? 5.4 : 0), md: 0 },
                marginRight: { xs: (image.id === images[images.length - 1].id ? 5.4 : 0), md: 0 },
                width: '14em',
                height: '14em',
                objectFit: 'cover',
                border: '1px solid',
                borderColor: theme.palette.LIGHT_GREY.main,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default UserImageList;