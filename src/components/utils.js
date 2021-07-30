// TODO: add tests for each function
const dateNow = Date.now()

const filterDataLast7Days = (array) => {
  return array.filter(x => x.timestamp > Date.now() - 7 * 24 * 60 * 60 * 1000)
}

const sortChartDataByTimestamp = (checkStats) => {
  function sortByTimestamp(a, b) {
    if (a.timestamp < b.timestamp)
      return -1;
    if (a.timestamp > b.timestamp)
      return 1;
    return 0;
  }
  return checkStats.sort(sortByTimestamp);
}

const getValuesPerChartCategory = (checkStats, category) => {
  const data = [];
  if (category !== 'success') {
    checkStats.forEach(item => data.push(item[category] / 1000))
  } else {
    checkStats.forEach(item => data.push(item[category]))
  }
  return {
    name: category,
    data,
    pointStart: dateNow - 7 * 24 * 60 * 60 * 1000,
    pointInterval: 24 * 60 * 60
  }
}

export const formatDataForHighchartsSeries = (data, categories) => {
const filteredArray = filterDataLast7Days(data)
const sortedArray = sortChartDataByTimestamp(filteredArray);

let sortedData  = []
categories.map(item => {
  // TODO: improve syntax
  const extractData = getValuesPerChartCategory(sortChartDataByTimestamp(sortedArray), item);
  sortedData = [...sortedData, extractData ]
})
return sortedData
}
