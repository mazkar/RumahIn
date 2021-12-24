import WooCommerceAPI from 'react-native-woocommerce-api';

export const API = new WooCommerceAPI({
  url: 'https://urban.devrumaid.com/', // Your store URL
  ssl: true,
  consumerKey: 'ck_48c0fbcc31ae75449e426efc02fcc8ced5a8ff2a', // Your consumer secret
  consumerSecret: 'cs_2241a1f23e2bbb06ad578557243e52ad2db2cc34', // Your consumer secret
  wpAPI: true,
  data: 'wp-json',
  version: 'wc/v3', // WooCommerce WP REST API version
  queryStringAuth: true,
});
