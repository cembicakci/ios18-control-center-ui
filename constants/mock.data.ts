import { faker } from '@faker-js/faker/.';

export type Item = {
	key: string,
	title: string,
	description: string,
	image: string,
	bg: string,
	author: {
		name: string,
		avatar: string
	}
}

export default [...Array(20).keys()].map(() => ({
	key: faker.string.uuid(),
	title: faker.music.artist(),
	image: faker.image.urlLoremFlickr({ width: 300, height: 300 * 1.4, category: 'nature' }),
	description: faker.lorem.sentence({ min: 1, max: 30 }),
	bg: faker.internet.color(),
	author: {
		name: faker.person.fullName(),
		avatar: faker.image.avatarGitHub()
	}
}))
