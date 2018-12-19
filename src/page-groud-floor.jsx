import React from 'react';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';

import Page from './page.jsx';
import Day from './day.jsx';

import styles from './styles.js';


class PageGroundFloor extends React.PureComponent {
  render() {
    let { classes, t, year, monthIndex } = this.props;

    // creating the date for this month, using 0 as day number to get to the last day.
    // Because we use 0 as value for the day, we need to increement the month by one,
    // otherwise we will end up getting a date for the previous month.
    // We do all this, so we can find the amount of days in the month
    let date = new Date( year, monthIndex +1, 0 );
    let days_in_month = date.getDate();

    // create days
    let days = new Array();
    for( let day = 1; day <= days_in_month; day++) {
      days.push(
        <Day year={ year } monthIndex={ monthIndex } day={ day } className={ classes.dayRow } key={ monthIndex + '-' + day }>
          <td className={ classes.cell }></td>
          <td className={ classes.cell }></td>
          <td className={ classes.cell }></td>
          <td className={ classes.cell }></td>
          <td className={ classes.cell }></td>
        </Day>
      );
    }

    return (
      <Page>
        <table className={ classes.table }>
          <thead>
            <tr className={ classes.header }>
              <th colSpan="2" >
                <span>.{ ( monthIndex + 1).toString().padStart( 2, '0' ) }</span>
                <span>{ t( 'month_names.' + monthIndex ) }</span>
                <span>{ t( 'floors.ground.abbrev_label' ) }</span>
              </th>
              <th className={ classes.headerOption }>
                { t( 'floors.ground.options.at_forenoon.label' ) }
              </th>
              <th className={ classes.headerOption }>
                { t( 'floors.ground.options.at_noon.label' ) }
              </th>
              <th className={ classes.headerOption }>
                { t( 'floors.ground.options.at_afternoon.label' ) }
              </th>
              <th className={ classes.headerOption }>
                { t( 'floors.ground.options.at_evening.label' ) }
              </th>
              <th className={ classes.headerOption }>
                { t( 'floors.ground.options.at_night.label' ) }
              </th>
            </tr>
          </thead>
          <tbody>
            { days }
          </tbody>
        </table>
      </Page>
    );
  }
}

export default translate()( injectSheet( styles )( PageGroundFloor ) );
