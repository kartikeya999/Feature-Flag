# Before you Begin
Harness Feature Flags (FF) is a feature management solution that enables users to change the software’s functionality, without deploying new code. FF uses feature flags to hide code or behaviours without having to ship new versions of the software. A feature flag is like a powerful if statement.

For more information, see https://harness.io/products/feature-flags/

To read more, see https://ngdocs.harness.io/category/vjolt35atg-feature-flags

To sign up, https://app.harness.io/auth/#/signup/


# Harness Feature Flags Client SDK for JavaScript

Library for integrating Harness Feature Flags into JavaScript UI applications.

## Install

```shell
npm i @harnessio/ff-javascript-client-sdk
```

or

```shell
yarn add @harnessio/ff-javascript-client-sdk
```

## Usage

```typescript
import { initialize, Event } from '@harnessio/ff-javascript-client-sdk'
```

Initialize SDK with api key and target information.

```typescript
initialize(FeatureFlagSDKKey: string, target: Target, options?: Options)
```

In which `Target` and `Options` are defined as:

```typescript
interface Target {
  identifier: string
  name?: string
  anonymous?: boolean
  attributes?: object
}

interface Options {
  baseUrl?: string
  eventUrl?: string
  eventsSyncInterval?: number
  streamEnabled?: boolean
  allAttributesPrivate?: boolean
  privateAttributeNames?: string[]
  debug?: boolean
}
```

For example:

```typescript
const cf = initialize('00000000-1111-2222-3333-444444444444', {
    identifier: YOUR_TARGET_IDENTIFIER,      // Target identifier
    name: YOUR_TARGET_NAME,                  // Optional target name
    attributes: {                            // Optional target attributes
      email: 'sample@sample.com'
    }
  });
```

### Listening to events from the `cf` instance.

```typescript
cf.on(Event.READY, flags => {
  // Event happens when connection to server is established
  // flags contains all evaluations against SDK key
})

cf.on(Event.CHANGED, flagInfo => {
  // Event happens when a changed event is pushed
  // flagInfo contains information about the updated feature flag
})

cf.on(Event.DISCONNECTED, () => {
  // Event happens when connection is disconnected
})

cf.on(Event.ERROR, error => {
  // Event happens when connection some error has occurred
})

cf.on(Event.ERROR_AUTH, error => {
  // Event happens when unable to authenticate
})

cf.on(Event.ERROR_FETCH_FLAGS, error => {
  // Event happens when unable to fetch flags from the service
})

cf.on(Event.ERROR_FETCH_FLAG, error => {
  // Event happens when unable to fetch an individual flag from the service
})

cf.on(Event.ERROR_METRICS, error => {
  // Event happens when unable to report metrics back to the service
})

cf.on(Event.ERROR_STREAM, error => {
  // Event happens when the stream returns an error
})
```

### Getting value for a particular feature flag

```typescript
const value = cf.variation('Dark_Theme', false) // second argument is default value when variation does not exist
```

### Cleaning up

Remove a listener of an event by `cf.off`.

```typescript
cf.off(Event.ERROR, error => {
  // Do something when an error occurs
})
```

Remove all listeners:

```typescript
cf.off()
```

On closing your application, call `cf.close()` to close the event stream.

```typescript
cf.close();
```

## Set evaluations

In some cases it might be worthwhile providing the SDK with a set of evaluations which it can then serve instantly. You 
might want to consider this when you need to:
- **reduce application startup time** by providing default values or a snapshot of evaluations. For example, if your
  application is server-side generated, then it might make sense to retrieve evaluations on the server and provide them 
  in the HTML of the page to be injected into the SDK
- **provide network redundancy** by allowing your app to detect network connectivity issues accessing the service and 
  loading evaluations from another source

To achieve this you can call the `setEvaluations` method at any time after initializing the client. The 
`setEvaluations` method takes an array of `Evaluation` objects as an argument.

```typescript
cf.setEvaluations(evals);
```

In which `Evaluation` is defined as:
```typescript
export interface Evaluation {
  flag: string // Feature flag identifier
  identifier: string // variation identifier
  value: boolean | string | number | object | undefined // variation value
  kind: string // boolean | json | string | int
  deleted?: boolean // mark that feature flag is deleted
}
```

## Import directly from unpkg

In case you want to import this library directly (without having to use npm or yarn):

```html
<script type="module">
  import { initialize, Event } from 'https://unpkg.com/@harnessio/ff-javascript-client-sdk/dist/sdk.client.js'
</script>
```

If you need to support old browsers which don't support ES Module:

```html
<script src="https://unpkg.com/@harnessio/ff-javascript-client-sdk/dist/sdk.client.js"></script>
<script>
  var initialize = HarnessFFSDK.initialize
  var Event = HarnessFFSDK.Event
</script>
```

## License

Apache version 2.
