import { PrismaClient } from '@prisma/client';
import comicsData from './seed.json' assert { type: 'json' };

const prisma = new PrismaClient();

async function main() {
	console.log(`Start seeding ...`);

	for (const c of comicsData) {
		/* Updates or Create the authors beforehand */
		const author_ids: number[] = [];
		for (let i = 0; i < c.authors.length; ++i) {
			const author_name = c.authors[i];

			const author = await prisma.author.upsert({
				where: {
					name: author_name
				},
				update: {
					name: author_name
				},
				create: {
					name: author_name
				}
			});

			console.log(`Author updated : { id: ${author.id}, name: ${author.name} }`);
			author_ids.push(author.id);
		}

		/* Create the comic and connect the upserted authors */
		const comic = await prisma.comic.create({
			data: {
				isbn: c.isbn,
				title: c.title,
				description: c.description,
				volume: c.volume,
				releaseDate: new Date(c.releaseDate),
				pages: c.pages,
				authors: {
					connect: author_ids.map((author_id) => {
						return { id: author_id };
					})
				},
				series: {
					connectOrCreate: {
						where: {
							name: c.series.name
						},
						create: {
							name: c.series.name,
							collection: {
								connectOrCreate: {
									where: {
										name: c.series.collection.name
									},
									create: {
										name: c.series.collection.name,
										editor: {
											connectOrCreate: {
												where: {
													name: c.series.collection.editor.name
												},
												create: {
													name: c.series.collection.editor.name
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
		console.log(`Created comic with isbn: ${comic.isbn}`);
	}
	console.log(`Seeding finished.`);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
