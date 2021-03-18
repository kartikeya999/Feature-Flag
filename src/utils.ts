import { Options } from './types'

export const defaultOptions: Options = {
  debug: false,
  baseUrl: 'https://config.feature-flags.uat.harness.io/api/1.0',
  streamEnabled: true,
  allAttributesPrivate: false,
  privateAttributeNames: []
}

// tslint:disable-next-line:no-console
export const logError = (message: string, ...args: any[]) => console.error(`[FF-SDK] ${message}`, ...args)
