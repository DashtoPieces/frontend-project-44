.PHONY: install	brain-games

install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-gcd:
	node bin/brain-gsd.js

brain-pro:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js