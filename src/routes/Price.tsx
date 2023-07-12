import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faArrowTrendDown,
} from "@fortawesome/free-solid-svg-icons";

const PercentList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const PercentItem = styled.div<IPercentItem>`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px 0px;
  border-radius: 15px;

  span:first-child {
    font-size: 24px;
    margin-bottom: 10px;
  }
  span:last-child {
    font-size: 28px;
    font-weight: 600;
    color: ${(props) => (props.isPlus ? "#00B746" : "#ef403c")};
  }
`;

interface RouteState {
  name: string;
  symbol: string;
  tickersData: {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      };
    };
  };
}

interface IPercentItem {
  isPlus: boolean;
}

function Price() {
  const { state } = useLocation<RouteState>();
  const { tickersData } = state;
  const {
    percent_change_1h,
    percent_change_6h,
    percent_change_24h,
    percent_change_7d,
    percent_change_30d,
    percent_change_1y,
  } = tickersData.quotes.USD;
  return (
    <>
      <PercentList>
        <PercentItem isPlus={percent_change_1h > 0}>
          <span>Before 1h</span>
          <span>
            {percent_change_1h > 0
              ? `+${percent_change_1h}% `
              : `${percent_change_1h}% `}
            {percent_change_1h > 0 ? (
              <FontAwesomeIcon icon={faArrowTrendUp} />
            ) : (
              <FontAwesomeIcon icon={faArrowTrendDown} />
            )}
          </span>
        </PercentItem>
        <PercentItem isPlus={percent_change_6h > 0}>
          <span>Before 6h</span>
          <span>
            {percent_change_6h > 0
              ? `+${percent_change_6h}% `
              : `${percent_change_6h}% `}
            {percent_change_6h > 0 ? (
              <FontAwesomeIcon icon={faArrowTrendUp} />
            ) : (
              <FontAwesomeIcon icon={faArrowTrendDown} />
            )}
          </span>
        </PercentItem>
        <PercentItem isPlus={percent_change_24h > 0}>
          <span>Before 24h</span>
          <span>
            {percent_change_24h > 0
              ? `+${percent_change_24h}% `
              : `${percent_change_24h}% `}
            {percent_change_24h > 0 ? (
              <FontAwesomeIcon icon={faArrowTrendUp} />
            ) : (
              <FontAwesomeIcon icon={faArrowTrendDown} />
            )}
          </span>
        </PercentItem>
        <PercentItem isPlus={percent_change_7d > 0}>
          <span>Before 7d</span>
          <span>
            {percent_change_7d > 0
              ? `+${percent_change_7d}% `
              : `${percent_change_7d}% `}
            {percent_change_7d > 0 ? (
              <FontAwesomeIcon icon={faArrowTrendUp} />
            ) : (
              <FontAwesomeIcon icon={faArrowTrendDown} />
            )}
          </span>
        </PercentItem>
        <PercentItem isPlus={percent_change_30d > 0}>
          <span>Before 30d</span>
          <span>
            {percent_change_30d > 0
              ? `+${percent_change_30d}% `
              : `${percent_change_30d}% `}
            {percent_change_30d > 0 ? (
              <FontAwesomeIcon icon={faArrowTrendUp} />
            ) : (
              <FontAwesomeIcon icon={faArrowTrendDown} />
            )}
          </span>
        </PercentItem>
        <PercentItem isPlus={percent_change_1y > 0}>
          <span>Before 1y</span>
          <span>
            {percent_change_1y > 0
              ? `+${percent_change_1y}% `
              : `${percent_change_1y}% `}
            {percent_change_1y > 0 ? (
              <FontAwesomeIcon icon={faArrowTrendUp} />
            ) : (
              <FontAwesomeIcon icon={faArrowTrendDown} />
            )}
          </span>
        </PercentItem>
      </PercentList>
    </>
  );
}

// #ef403c
// #00B746

export default Price;
