import ecommerce from "../assets/projects/ecommerce.png";
import discord from "../assets/projects/discord.png";
import keeper from "../assets/projects/keeper.png";
import authorisation from "../assets/projects/authorisation.png";
import notion from "../assets/projects/notion.png";
import shopwell from "../assets/projects/shopwell.png";

export const ProjectList = [
    {
        id: 2,
        name: "E-Commerce",
        description:
            "Our ShopWell Ecommerce, built with MERN stack, revolutionizes online shopping. It provides secure user authentication, extensive product catalog, efficient cart management, and Stripe-powered payments. Users easily access order history, while admins have a dedicated dashboard. Responsive design, Bcrypt-secured passwords, and Cloudinary image storage ensure a seamless and secure shopping experience.",
        img: shopwell,
        //max 6 tech stack
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Stripe",
        ],
        source: "https://github.com/Pratiyush2003/shopwell-frontend",
        demo: "https://shopwell-frontend.vercel.app/",
    },
    {
        id: 6,
        name: "Keeper - Keep Your Notes",
        description:
            "Inspired by Google Keep, Keeper is a note-taking website developed with React and adorned with Tailwind CSS and Material UI. It offers a user-friendly experience, allowing you to effortlessly create and manage notes. The responsive design ensures a seamless experience across all devices, making note-taking a breeze.",
        img: keeper,
        //max 6 tech stack
        tech: ["Node.js", "Express.js", "React.js", "MongoDB", "Jwt"],
        source: "https://github.com/Pratiyush2003/notes-app",
        demo: "https://notes-app-o741.vercel.app/login",
    },
];
