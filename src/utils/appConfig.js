import { parameterMap } from './urlUtils'


const clientIds = {
  'localhost': '56fcd2a356d374001bc429d7',
  'staging': '56fcd2a356d374001bc429d7',
  'production': '56fcd20c56d3742a73c429d2',
  'development': '56fcd2a356d374001bc429d7'
}

const clientSecrets = {
  'localhost': '5af6SrWSQp8MtWMJDp5tEtmj6U82xCxu',
  'staging': '5af6SrWSQp8MtWMJDp5tEtmj6U82xCxu',
  'production': 'yw2YjSuLAtvM5rAzFcLs8sgp7V72zg5N',
  'development': '5af6SrWSQp8MtWMJDp5tEtmj6U82xCxu'
}

const apiUrls = {
  "localhost": "https://plotagon-education-api-staging.herokuapp.com",
  "development": "https://plotagon-education-api-staging.herokuapp.com",
  "staging": "https://plotagon-education-api-staging.herokuapp.com",
  "production": "https://api.education.plotagon.com"
}

export default function(queryString) {
  const parameters = parameterMap(queryString)

  // if there is an environment parameter, select that
  let environment
  if (parameters.environment) {
    environment = parameters.environment
  } else {
    // if not fallback to staging
    environment = "staging"
  }

  let logging
  if (parameters.logging) {
    logging = parameters.logging === 'true'
  } else {
    logging = false
  }

  let isEditor
  if (parameters.isEditor) {
    isEditor = parameters.isEditor === 'true'
  } else {
    isEditor = false
  }

  // we should be able to check if engine is available or not instead
  let mockApi
  mockApi = parameters.api === "mock"

  let appVersion
  if (parameters.appVersion) {
    appVersion = parameters.appVersion
  } else {
    appVersion = "0.1.2"
  }

  let buildVersion
  if (parameters.buildVersion) {
    buildVersion = parameters.buildVersion
  } else {
    buildVersion = "1"
  }

  let deviceModel
  if (parameters.deviceModel) {
    deviceModel = decodeURI(parameters.deviceModel)
  } else {
    deviceModel = "Mock Device 1"
  }

  let deviceOs
  if (parameters.deviceOs) {
    deviceOs = decodeURI(parameters.deviceOs)
  } else {
    deviceOs = "Mock OS 2.0 x64"
  }

  let platform
  if (parameters.platform) {
    platform = decodeURI(parameters.platform)
  } else {
    platform = "mock"
  }

  let deviceId
  if (parameters.deviceId) {
    deviceId = decodeURI(parameters.deviceId)
  } else {
    deviceId = 'browserUser'
  }

  let bundleId
  if (parameters.bundleId) {
    bundleId = decodeURI(parameters.bundleId)
  } else {
    bundleId = 'running.in.browser'
  }

  let appName
  if (parameters.appName) {
    appName = decodeURI(parameters.appName)
  } else {
    appName = 'Plotagonia'
  }

  return {
    apiBaseUrl: apiUrls[environment],
    appVersion,
    buildVersion,
    clientId: clientIds[environment],
    clientSecret: clientSecrets[environment],
    deviceId,
    bundleId,
    appName,
    deviceModel,
    deviceOs,
    environment,
    isEditor,
    loggingEnabled: logging,
    mockApi,
    mockedUnity: platform === 'mock',
    platform,
    requireAuth: false
  }
}
