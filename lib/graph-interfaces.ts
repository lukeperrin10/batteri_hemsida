export interface TAktuellt {
  aktuellts: {
    title: string
    description: string
    show: boolean
    id: string
  }
}

export interface TImage {
  image: {
    id: string
    height: number
    url: string
    width: number
  }
}

export interface TCategories {
  categories: {
    id: string
    description: string
    subTitleLength: number
    name: string
    slug: string
    isWide: boolean
    image: TImage
    wideImage: TImage
    logo: TImage
    gradientColor: Array<{ color: Array<{ hex: string }> }>
  }
}

export interface TCourseLeader {
  courseLeader: {
    id: string
    name: string
    profession: string
    courseLeaderImage: Array<{ url: string }>
    courseLeaderAbout: Array<{ html: string }>
  }
}

export interface TRelated {
    products: Array<{
      id: string
      name: string
      slug: string
      shortDescription: string
      images: Array<{ url: string }>
      logo: Array<{ url: string }>
      gradientColor: Array<{ color: Array<{ hex: string }> }>
    }>
}

export interface TPopular {
  popularCourses: {
    id: string
    products: TRelated
  }
}

export interface TProductCard {
  products: {
    id: string
    name: string
    price: number
    slug: string
    shortDescription: string
    courseLeaders: Array<{courseLeader: TCourseLeader}>
    images: Array<{ url: string }>
    wideImage: Array<{ url: string }>
    logo: Array<{ url: string }>
    gradientColor: Array<{ color: Array<{ hex: string }> }>
  }
}

export interface TProduct {
  products: Array<{
    id: string
    name: string
    subTitle: string
    price: number
    privatePrice: number
    slug: string
    kursprogram: Array<string>
    dates: Array<string>
    courseDuration: Array<number>
    relatedCourses: TRelated
    courseLeaders: TCourseLeader
    description: Array<{html: string}>
    images: Array<{ url: string }>
    wideImage: Array<{ url: string }>
    gradientColor: Array<{ color: Array<{ hex: string }> }>
    localizations: Array<{
      locale: string
      name: string
      slug: string
    }>
  }>
}
