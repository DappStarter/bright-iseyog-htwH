require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'give nation flush special drift regret snow quality hunt define army gaze'; 
let testAccounts = [
"0xfa31f135cc71b5b942cd898992ea51a8ea32f53ea7c0ef0cf3c2d4a65cb2f180",
"0x2dd95eba3d57a1ddf1e2642d97636865e87fdc3994ff4f92453e44716dca3b5d",
"0x0092da8e29bd08e430a334d401a7e3533a38f87f72728d16dfc706582764af62",
"0xcf97fc312f311565307859e8168c40d52e11391d26a12788626efc6e6079985b",
"0xa1e2c0f3180000cc247e780dc3892fc0f68d9a10d865272f212af9505297c280",
"0xb0528c9857a8f27fedf108f4aeeac1c9d9e82f72ba4f66e465803e66301c56a5",
"0xeaa4504bf1f44be15467d94cec8417af5521dbd250a31bd23513d7861229ac12",
"0x82ae9086aefbafc0afd06a0c5b27b58ec07536f2810c5116c659fdf023eddceb",
"0x76e3c31df3273d2ac1ebcfc8b7d337e863a1d05ab04192fa0c86a772d9852b41",
"0xb5548659e64291355a781223a706d881bccb4e98e5a798b961008b7aa3d2cd1b"
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


