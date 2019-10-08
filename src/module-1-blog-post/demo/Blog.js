import React from "react";
import "./Blog.css";

function Blockquote({ text }) {
    return <blockquote className="demo-blog-blockquote">{text}</blockquote>;
}

function BlogPost() {
    return (
        <div className="demo-blog">
            <h1>Title</h1>
            <time>{new Date().toLocaleDateString()}</time>
            <h2>Subtitle</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque
                a mi augue.Donec lobortis urna nec iaculis vulputate.Aliquam
                lacinia nulla cursus, tempus eros non, ultricies ex. In hac
                habitasse platea dictumst.Duis euismod mollis volutpat.Nunc sit
                amet mi non enim porttitor maximus in eget ante.Donec eget
                mattis nunc.Nulla quis aliquet odio, sit amet semper
                magna.Vivamus ultrices magna at metus mollis, vel laoreet ex
                euismod.Etiam sed mollis velit.
            </p>
            <Blockquote text="A quote from someone" />
            <img
                alt="Test"
                className="demo-blog-image-left"
                src="https://www.w3schools.com/css/img_lights.jpg"
            />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque
                a mi augue.Donec lobortis urna nec iaculis vulputate.Aliquam
                lacinia nulla cursus, tempus eros non, ultricies ex.In hac
                habitasse platea dictumst.Duis euismod mollis volutpat.Nunc sit
                amet mi non enim porttitor maximus in eget ante.Donec eget
                mattis nunc.Nulla quis aliquet odio, sit amet semper
                magna.Vivamus ultrices magna at metus mollis, vel laoreet ex
                euismod.Etiam sed mollis velit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque
                a mi augue.Donec lobortis urna nec iaculis vulputate.Aliquam
                lacinia nulla cursus, tempus eros non, ultricies ex.In hac
                habitasse platea dictumst.Duis euismod mollis volutpat.Nunc sit
                amet mi non enim porttitor maximus in eget ante.Donec eget
                mattis nunc.Nulla quis aliquet odio, sit amet semper
                magna.Vivamus ultrices magna at metus mollis, vel laoreet ex
                euismod.Etiam sed mollis velit.
            </p>
        </div>
    );
}

export default BlogPost;
