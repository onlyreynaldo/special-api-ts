export default {
  mongodbMemoryServerOptions: {
    binary: {
      version: '4.4.3',
      skipMD5: true
    },
    instance: {
      dbName: 'jest'
    },
    autoStart: false
  }
}
