export interface AAktuellt {
  aktuellts: {
    title: string
    description: string
    show: boolean
    id: string
  }
}

export interface ImageData {
  image: {
    id: string
    height: number
    url: string
    width: number
  }
}

export interface ACategories {
  categories: {
    id: string
    description: string
    subTitleLength: number
    name: string
    slug: string
    isWide: boolean
    image: ImageData
    wideImage: ImageData
    logo: ImageData
    gradientColor: Array<{ color: Array<{ hex: string }> }>
  }
}

export interface CourseLeaderData {
  courseLeader: {
    id: string
    name: string
    profession: string
    courseLeaderImage: Array<{ url: string }>
    courseLeaderAbout: Array<{ html: string }>
  }
}

export interface APopular {
  popularCourses: {
    id: string
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
}

export interface ProductData {
  products: {
    id: string
    name: string
    price: number
    slug: string
    shortDescription: string
    courseLeaders: Array<{courseLeader: CourseLeaderData}>
    images: Array<{ url: string }>
    wideImage: Array<{ url: string }>
    logo: Array<{ url: string }>
    gradientColor: Array<{ color: Array<{ hex: string }> }>
  }
}

export interface ProductCardData {
  products: {
    id: string
    name: string
    price: number
    slug: string
    shortDescription: string
    courseLeaders: Array<{courseLeader: CourseLeaderData}>
    images: Array<{ url: string }>
    wideImage: Array<{ url: string }>
    logo: Array<{ url: string }>
    gradientColor: Array<{ color: Array<{ hex: string }> }>
  }
}
