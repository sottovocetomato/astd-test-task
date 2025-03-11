import { faker } from '@faker-js/faker'

export interface Product {
  image: string
  newPrice: number
  oldPrice?: number
  brand: string
  name: string
  url: string
}

export const generateFakeProduct = (): Product => {
  const hasOldPrice = faker.datatype.boolean()
  const newPrice = faker.commerce.price({ min: 100, max: 100000 })
  const oldPrice = hasOldPrice
    ? newPrice + faker.commerce.price({ min: 10, max: 10000 })
    : undefined

  return {
    image: faker.image.url(),
    newPrice: Number(newPrice),
    oldPrice: oldPrice ? Number(oldPrice) : undefined,
    brand: faker.company.name(),
    name: faker.commerce.productName(),
    url: path.products + '/' + faker.number.int({ min: 10, max: 10000 }),
  }
}
