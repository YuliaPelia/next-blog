import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "content/posts");

export function getPostFiles() {
    return fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, "");
    const filePath = path.join(postDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

export function getPostsAll() {
    const postFiles = fs.readdirSync(postDirectory);

    const allPosts = postFiles.map((postFile) => {
        return getPostData(postFile);
    })

    const sortedPosts = allPosts.sort((a, b) => a.date > b.date ? -1 : 1);

    return sortedPosts;
}

export function getPostsFeatured() {
    const allPosts = getPostsAll();
    const featuredPosts = allPosts.filter((post) => post.isFeatured);
    return featuredPosts;
}




