import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(el => {
        return (
          <GridItem key={el.id}>
            <img src={el.flag} alt={el.country} />
          </GridItem>
        );
      })}
    </Grid>
  );
};
