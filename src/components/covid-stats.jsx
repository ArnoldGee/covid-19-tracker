import React, {useState, useEffect} from 'react';
import axios from 'axios';

import StatsChart from './stats-chart';

const CovidStats = () => {
  const [covidInfo, setCovidInfo] = useState(undefined);

  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/all').then(({data}) => {
      console.log(data);
      setCovidInfo(data);
    });
  }, []);

  if (covidInfo) {
    const {
      active,
      deaths,
      recovered,
      todayCases,
      todayDeaths,
      todayRecovered,
    } = covidInfo;
    return (
      <div style={{minHeight: '60vh'}} className="section">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-primary">
                  <p className="subtitle">Today Recovered</p>
                  <p className="title">{todayRecovered}</p>
                </article>
                <article className="tile is-child notification is-warning">
                  <p className="subtitle">Today Cases</p>
                  <p className="title">{todayCases}</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <p className="subtitle">Today Deaths</p>
                  <p className="title">{todayDeaths}</p>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="subtitle">Active</p>
                <p className="title">{active}</p>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-success">
              <div className="content">
                <p className="subtitle">Recovered</p>
                <p className="title">{recovered}</p>
              </div>
            </article>
          </div>
        </div>
        <section className="section">
          <h1 className="title">Today stats</h1>
          <StatsChart
            data={[todayCases, todayDeaths, todayRecovered]}
            labels={['Today Cases', 'Today Deaths', 'Today Recovered']}
            chartName={'todayChart'}
          />
        </section>
        <section className="section">
          <h1 className="title">Total stats</h1>
          <StatsChart
            data={[active, deaths, recovered]}
            labels={['Total Cases', 'Total Deaths', 'Total Recovered']}
            chartName={'totalChart'}
          />
        </section>
      </div>
    );
  } else {
    return (
      <div style={{minHeight: '60vh'}} className="hero is-large">
        <div className="hero-body">
          <div className="block">
            <h1 className="subtitle has-text-centered	">Loading...</h1>
          </div>
          <progress className="progress is-large is-primary " max="100" />
        </div>
      </div>
    );
  }
};

export default CovidStats;
