import React from 'react';
import Link from 'next/link';
import getAllCategories from '../lib/get-all-categories';
import getPageData from '../lib/get-page-data';
import Card from '../components/Card';

const Kurser = ({ categories }) => {
  return categories.map((category, slug) => {
    return (
      <Link href={`/kurser/${category.slug}`} key={slug} passHref>
        <div >
          <Card data={category} />
        </div>
      </Link>
    );
  });
};

export default Kurser;

export async function getStaticProps({ locale }) {
  const pageData = await getPageData({ locale });
  const { categories } = await getAllCategories({ locale });

  return {
    props: {
      ...pageData,
      categories,
    },
  };
}
