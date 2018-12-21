const page = {
  width: 210,
  height: 297,
  padding: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  }
};

const canvas = getPageInnerDimensions( page );

const borderWidth = 0.2;

const rowHeaderHeight = 25;
const rowDayHeight = ( canvas.height - rowHeaderHeight ) / 31;
const rowDayInnerHeight = rowDayHeight - 2 * borderWidth;

const dayFontSizeScale = 0.55;

const cell = {
  border: {
    width: `${ borderWidth }mm`,
    style: 'solid',
    color: 'black',
  }
};

const cellDay = {
  verticalAlign: 'middle',
}

const colDate = {
  width: '9.5mm',
  textAlign: 'right',
};

const colDayName = {
  width: '10.5mm',
};

const styles = {

  '@global': {
    body: {
      backgroundColor: '#beeeef',
    },
    '@page': {
      margin: 0,
    }
  },

  page: {
    width: `${ page.width }mm`,
    height: `${ page.height }mm`,

    padding: {
      top: `${ page.padding.top }mm`,
      right: `${ page.padding.right }mm`,
      bottom: `${ page.padding.bottom }mm`,
      left: `${ page.padding.left }mm`,
    },

    position: 'relative',
    overflow: 'hidden',
    pageBreakAfter: 'always',

    backgroundColor: '#fff',
    boxShadow: '2px 2px 10px 0px #888',

    '@media print': {
      margin: 0,
      boxShadow: 'none',
    },

    '&:before': {
      content: 'url()',
      display: 'block',

      position: 'absolute',
      top: `${ page.padding.top }mm`,
      right: `${ page.padding.right }mm`,
      bottom: `${ page.padding.bottom }mm`,
      left: `${ page.padding.left }mm`,

      border: '1px solid #ddd',

      display: 'none',

      '@media print': {
        display: 'none',
      },
    }
  },

  table: {
    width: '100%',
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    /*'& td, th': {
      border: '1px solid grey',
    }*/
  },

  rowMonthHeader: {
  },

  monthHeader: {
    position: 'relative',
    paddingTop: '2mm',
    paddingLeft: '12mm',
    paddingBottom: '5mm',
  },

  monthNumber: {
    position: 'absolute',
    top: '-17mm',
    left: '-8mm',

    fontSize: '35mm',
    fontWeight: 'bold',

    opacity: 0.05
  },

  monthName: {
    fontSize: '8mm',
    fontWeight: 'bold',
  },

  colDate: {
    extend : colDate,
  },

  colDayName: {
    extend: colDayName,
  },

  floorLabel: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },

  rowHeader: {
    // height: `${ rowHeaderHeight }mm`,
  },

  rowDay: {
    height: `${ rowDayHeight }mm`,
    fontSize:  `${ rowDayInnerHeight * dayFontSizeScale }mm`,
    backgroundColor: '#fff',
  },

  rowDay_6: {
    backgroundColor: '#eee',
  },

  rowDay_0: {
    backgroundColor: '#ddd',
  },

  cellOption: {
    textAlign: 'center',
    verticalAlign: 'bottom',
    paddingBottom: '1mm',
  },

  optionLabel: {
    fontSize: '4.5mm',
  },

  cellDayDate: {
    extend: [ cell, cellDay, colDate ],

    borderRightWidth: 0,
    paddingRight: 0,
  },

  cellDayName: {
    extend: [ cell, cellDay, colDayName ],

    borderLeftWidth: 0,
    paddingLeft: `${ rowDayHeight * dayFontSizeScale * 0.15 }mm`,
  },

  cell: {
    extend: [ cell ],
  }
};

export default styles;

function getPageInnerDimensions( page ) {
  return {
    width: page.width - page.padding.left - page.padding.right,
    height: page.height - page.padding.top - page.padding.bottom,
  }
}