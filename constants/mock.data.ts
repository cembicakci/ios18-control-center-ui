import { faker } from '@faker-js/faker/.';

export type Item = {
	key: string,
	title: string,
	description: string,
	author: {
		name: string,
		avatar: string
	}
}

export default [...Array(20).keys()].map(() => ({
	key: faker.string.uuid(),
	title: faker.music.artist(),
	description: faker.lorem.sentence({ min: 1, max: 3 }),
	author: {
		name: faker.person.fullName(),
		avatar: faker.image.avatarGitHub()
	}
}))
