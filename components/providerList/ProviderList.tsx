import React from 'react';
import ProviderCard from '../providerCard/ProviderCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

interface Provider {
  name: string;
  category: {
    name : string
  };
  imageSrc?: string;
  information?: string;
  price: number;
}

interface ProviderListProps {
  providers: Provider[];
}

const ProviderList: React.FC<ProviderListProps> = ({ providers }) => {
  return (
    <Grid container spacing={2}>
      {providers.map((provider, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Box m={2}>
            <ProviderCard
              name={provider.name}
              category={provider.category?.name}
              price={provider.price} images={[]} rating={0} location={''} promotions={''}            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProviderList;
