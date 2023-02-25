import { Section, Container, CountryInfo, Loader } from 'components';
import { useLocation } from 'react-router-dom';

import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [countryInfo, setCountryInfo] = useState({});
  const location = useLocation();

  const { id } = useParams();
  useEffect(() => {
    fetchCountry(id).then(data => setCountryInfo(data));
  }, [id]);

  const goBackLink = location?.state?.from ?? '/';

  return (
    <Section>
      <Container>
        <div
          style={{
            marginBottom: '60px',
            color: '#f2f2f2',
            letterSpacing: '0.06em',
            textDecoration: 'underline',

            borderColor: 'gray',
          }}
        >
          <Link to={goBackLink}>Back to Countries</Link>
        </div>
        <CountryInfo
          flag={countryInfo.flag}
          capital={countryInfo.capital}
          country={countryInfo.countryName}
          id={countryInfo.id}
          languages={countryInfo.languages}
          population={countryInfo.population}
        />
      </Container>
    </Section>
  );
};
