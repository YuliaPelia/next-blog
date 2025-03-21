import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

function PostContent({post}) {
    const { title, image, content, slug } = post;

    const customRenderers = {
        // img(image) {
        //     return <Image src={`/images/posts/${slug}/${image.src}`} alt={image.alt} width={600} height={300} />
        // }
        p(paragraph) {
            const { node } = paragraph;
      
            if (node.children[0].tagName === "img") {
                const image = node.children[0];
                return (
                    <div className={classes.image}>
                        <Image src={image.properties.src} alt={image.properties.alt} width={600} height={300} />
                    </div>
                )

            }
            return <p>{paragraph.children}</p>
        },
        code(code) {
            const { className, children } = code;
            const language = className.split("-")[1]; // className is something like language-js => we only want the language part
            return <SyntaxHighlighter style={atomDark} language={language} children={children} />
        }
    }

    return (
        <article className={classes.content}>
           <PostHeader title={title} image={image} />
           <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
        </article>
    );
}

export default PostContent;