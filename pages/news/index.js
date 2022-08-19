import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li><Link href='/news/newsId'>Detailed News...</Link></li>
                <li><Link href=''>News Nothing...</Link></li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;