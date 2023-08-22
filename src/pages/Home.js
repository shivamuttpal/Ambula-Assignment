import React from 'react';
import Typography from '@mui/material/Typography';

const Home = () => {
  const typographyStyle = {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex', // This is needed for justifyContent and alignItems to work
  };

  return (
    <div>
      <Typography variant='h2' style={typographyStyle}>
        Home page
      </Typography>
      
      <Typography style={typographyStyle}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi provident dolor voluptate iusto repellendus perferendis voluptatibus, dignissimos cum dolores earum. Ab dolorum ratione unde harum magni commodi. Adipisci maxime ratione explicabo eaque officiis. Commodi corporis blanditiis, nobis aperiam necessitatibus dolore voluptatem est sint quibusdam eligendi quidem porro quod, voluptatum deserunt doloribus? Dolorem numquam temporibus perspiciatis in laborum magni et labore similique, dolore quod neque? Exercitationem, quo repellendus fugiat ad ratione vero debitis eligendi ex, optio recusandae qui nostrum asperiores fugit, odio nobis velit modi iure ut. Possimus impedit ipsa nobis laborum! Facere at dolorum corporis et obcaecati adipisci iusto dolor!</Typography>
      {/* Other content */}
    </div>
  );
};

export default Home;
