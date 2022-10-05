export interface TAktuellt {
  aktuellts: {
    title: string
    description: string
    show: boolean
    readonly id: string
  }
}

export interface TImage {
  image: {
    readonly id: string
    height: number
    url: string
    width: number
  }
}

export interface TCategories {
  categories: Array<{
    readonly id: string
    description: string
    subTitleLength: number
    name: string
    slug: string
    isWide: boolean
    image: TImage
    wideImage: TImage
    logo: TImage
    gradientColor: { color: { hex: string } }
  }>
}

export interface TCategory {
  category: {
    readonly id: string
    description: string
    subTitleLength: number
    name: string
    slug: string
    isWide: boolean
    image: TImage
    wideImage: TImage
    logo: TImage
    gradientColor: { color: { hex: string } }
    products: Array<{
      readonly id: string
      name: string
      price: number
      slug: string
      shortDescription: string
      courseLeaders: { courseLeader: TCourseLeader }
      images: { url: string }
      wideImage:  {url: string }
      logo: { url: string }
      gradientColor: { color: { hex: string } }
    }>
  }
}

export interface TCourseLeader {
  courseLeader: {
    readonly id: string
    name: string
    profession: string
    courseLeaderImage:{ url: string }
    courseLeaderAbout: { html: string }
  }
}

export interface TRelated {
  products:{
    readonly id: string
    name: string
    slug: string
    shortDescription: string
    images: { url: string }
    logo: { url: string }
    gradientColor: { color: { hex: string } }
  }
}

export interface TPopular {
  popularCourses: {
    readonly id: string
    products: TRelated
  }
}

export interface TProductCard {
  products: Array<{
    readonly id: string
    name: string
    price: number
    slug: string
    shortDescription: string
    courseLeaders: { courseLeader: TCourseLeader }
    images: { url: string }
    wideImage:  {url: string }
    logo: { url: string }
    gradientColor: { color: { hex: string } }
  }>
}

export interface TProduct {
  products: {
    readonly id: string
    name: string
    subTitle: string
    price: number
    privatePrice: number
    slug: string
    kursprogram: string[]
    dates: string[]
    courseDuration: number[]
    relatedCourses: TRelated
    courseLeaders: TCourseLeader
    description: { html: string }
    images: { url: string }
    wideImage: { url: string }
    gradientColor: { color: { hex: string }}
    localizations: {
      locale: string
      name: string
      slug: string
    }
  }
}

// ================ Get page data Query types ================
export interface TPageData {
  footerCategories: TCategory
  navigationCategory: { categories: TCategory}
}
