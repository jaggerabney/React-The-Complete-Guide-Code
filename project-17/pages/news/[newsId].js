import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  // send request to fetch news item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
