all:
	npm run gen-erc20-abi ; npm run gen-pancakeswap-router-v2-abi ; npm run gen-pancakeswap-factory-v2-abi ; npm run gen-pancakeswap-pair-v2-abi ; tsc
