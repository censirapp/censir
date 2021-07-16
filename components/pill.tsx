import { GetCoords } from "@/utils/getCoords";
import { useGetPill } from "@/utils/useGetPill";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export const Pill = (): JSX.Element => {
  const { latitude: lat, longitude: lon } = GetCoords();
  const { weather, isLoading, isError } = useGetPill(lat, lon);

  if (isLoading) console.log("loading");

  console.log(weather);

  return (
    <div>
      {isError ? (
        <h1>An error occurred!</h1>
      ) : (
        <PillContainer>
          <LeftSide>
            <MainTemperature>
              {weather ? (
                weather.main.temp.toFixed(0)
              ) : (
                <Skeleton duration={1} width={50} height={35} />
              )}
            </MainTemperature>
            <MinMaxTemperature>
              {weather ? (
                weather.main.temp_min.toFixed(0) +
                "/" +
                weather.main.temp_max.toFixed(0)
              ) : (
                <Skeleton duration={1} width={40} height={20} />
              )}
            </MinMaxTemperature>
            <WeatherDescription>
              {weather ? (
                weather.weather[0].description
              ) : (
                <Skeleton duration={1} width={165} height={22} />
              )}
            </WeatherDescription>
            <WeatherLocation>
              {weather ? (
                weather.name + ", " + weather.sys.country
              ) : (
                <>
                  <Skeleton duration={1} width={155} height={22} />
                  <Skeleton
                    style={{ marginLeft: 10 }}
                    duration={1}
                    width={30}
                    height={22}
                  />
                </>
              )}
            </WeatherLocation>
          </LeftSide>
          <RightSide>
            <WeatherIcon src='/img/logo.svg' draggable={false} />
            <ViewMore href='https://looskie.com/'>View more</ViewMore>
          </RightSide>
        </PillContainer>
      )}
    </div>
  );
};

const PillContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 410px;
  border-radius: 18px;
  margin-left: 20px;
  padding: 16px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textColor};
  box-shadow: 1px -1px 12px rgb(0 0 0 / 37%);
`;

const LeftSide = styled.div``;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
`;

const MainTemperature = styled.h1`
  display: inline;
  padding: 0;
  font-size: 2.15em;
  margin: 0 10px 0 0;
  color: ${(props) => props.theme.colors.lightTextColor};
`;

const MinMaxTemperature = styled.span`
  padding: 0;
  margin: 0;
  font-size: 1.15em;
`;

const WeatherDescription = styled.p`
  padding: 0;
  margin: 0;
  text-transform: capitalize;
  font-size: 1.2em;
`;
const WeatherLocation = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.lightTextColor};
`;

const WeatherIcon = styled.img`
  width: 120px;
  height: auto;
`;

const ViewMore = styled.a`
  position: absolute;
  bottom 8px;
`;
