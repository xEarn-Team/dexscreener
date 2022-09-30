const { fetchPrice } = require("./lib/index.js");

async function main() {
    const priceNative = await fetchPrice("avalanchedfk", "defikingdoms", "DFKSHVAS/CRYSTAL");
    console.log(`priceNative: ${priceNative}`);
    const priceUsd = await fetchPrice("avalanchedfk", "defikingdoms", "DFKSHVAS/CRYSTAL", inUSD = true);
    console.log(`priceUsd: ${priceUsd}`);
}

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
