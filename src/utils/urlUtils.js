/**
 * @param {string} parameterString The query parameter string
 * @return {Object} Current page url query parameters as a dictionary
 */
function parameterMapFrom(parameterString) {
  const map = {}

  if (parameterString) {
    if (parameterString[0] == "?") parameterString = parameterString.substr(1)

    parameterString.split('&').forEach(function (keyValueString) {
      const splitPoint = keyValueString.indexOf('='),
        key = keyValueString.substr(0, splitPoint),
        value = keyValueString.substr(splitPoint + 1)

      map[decodeURIComponent(key)] = decodeURIComponent(value)
    })
  }

  return map
}


/**
 * @return {Object} Current page url query parameters as a dictionary
 */
export function parameterMap(queryString) {
  return parameterMapFrom(queryString)
}
