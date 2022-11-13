module.exports = {
  webpack: {
    resolve: {
      fallback: {
        net: false,
        "z_lib": false
      }
    }
  }
}