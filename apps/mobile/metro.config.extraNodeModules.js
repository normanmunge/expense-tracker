module.exports = {
    stream: require.resolve('stream-browserify'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    buffer: require.resolve('buffer/'),
    process: require.resolve('process/browser'),
    events: require.resolve('events/'),
    crypto: require.resolve('react-native-crypto'),
    net: require.resolve('react-native-tcp'),
    tls: require.resolve('react-native-tls'),
    zlib: require.resolve('browserify-zlib')
};