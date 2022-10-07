const heights = {
  burjKhalifa: 828,
  tokyoSkyTree: 634,
  shanghaiTower: 632,
  abrajAlBait: 601,
  cantonTower: 600,
  pingAnFinanceCentre: 600,
  lotteWorldTower: 555,
  cnTower: 553,
  oneWorldTradeCenter: 541,
  ostankinoTower: 540
};

const stratosphere = 11000;


const sumHeights = 
      Object.values(heights).reduce(function (result, current) {
        console.log(result)
        console.log(current)
        return result + current;
      }, 0);

console.log(sumHeights >= stratosphere);