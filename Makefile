dev:
	npm run start

build:
	npm run build

deploy-ipfs: build
deploy-ipfs: cd dist && ipfs --api /ip4/192.168.100.32/tcp/5001 add -r .
# deploy-ipfs: HASH=$(shell cd dist && ipfs --api /ip4/192.168.100.32/tcp/5001 add -r . | awk '/^added (.)* build$$/{print $$2}')

publish-ipfs:
	echo $(HASH)
	deploys route create -project=reichain -location=gke.cluster-rcf2 -domain=reichain.io -deployment=ipfs://$(HASH)