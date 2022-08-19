import { useRouter } from "next/router";

function DetailedPage() {

    const router = useRouter();

    const newsId = router.query.newsId;

    console.log(newsId);

    return <h1>DetailedPage</h1> ;
}

export default DetailedPage;