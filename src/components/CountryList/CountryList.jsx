import { Grid, GridItem } from 'components';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <Grid>
      {countries.map(el => {
        return (
          <GridItem key={el.id}>
            <Link state={{ from: location }} to={`/country/${el.id}`}>
              <img src={el.flag} alt={el.country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
