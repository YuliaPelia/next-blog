import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

function PostItem({ post }) {
    const { title, image, excerpt, date, slug } = post;

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <li className={classes.post}>
            <Link href={`/posts/${slug}`}>
                <div className={classes.image}>
                    <Image src={`${image}`} alt={title} width={400} height={300} layout="responsive" />
                </div>

                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </Link>
        </li>
    );
}

export default PostItem;