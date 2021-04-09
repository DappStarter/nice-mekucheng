require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hover enrich sun food stone remember stereo home grace industry slot gesture'; 
let testAccounts = [
"0x0c9a99dcc5131d9b2ddf9bda7d994a16dc062b63e3d291ed2e944a90012e9735",
"0xbeec20caf3806f762fedec94306c91d1dfe0afdcb9cf81def96d244b1094dd5f",
"0xfbb6406a93287dc46bd42181d5ca5de8d4a0e50b7917a6d423b6748f5d27b0a1",
"0x742ef682115c1347d847a60750989d95358ed4adfde3e18306746068e9b4a415",
"0x122d3487455b3e189be6f65d662f97fe7a3bb5fda41a4d4bf983bc1e6c5a9599",
"0x553f17f7a5c23e014d9883fffdbdc02e17e95fc72d0dc7871b548bf8702e029d",
"0x391bc381b2bce820d1c1473e671b70988a31fe9a8ff9a7597084028fffeb1f04",
"0xd5e04c0721c1e7e66f28800abf5b7e6f1c2f3c3cf81ef210a2f058e7272c5514",
"0x37d03e7f91ec0fa77e00758eb7142f55778fb65a1e6cfcf61aee5eac92a2eea8",
"0x50d3aba69c0e1e948d992adbcb80fa3f5ecb5c3c078841a1a7fc7b0971ec4299"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


