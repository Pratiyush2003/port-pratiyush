import ecommerce from "../assets/projects/ecommerce.png";
import keeper from "../assets/projects/keeper.png";
import portfolio from "../assets/projects/portfolio.png";


export const ProjectList = [
    {
        id: 2,
        name: "E-Commerce",
        description:
            "Our ShopWell Ecommerce, built with MERN stack, revolutionizes online shopping. It provides secure user authentication, extensive product catalog, efficient cart management, and Stripe-powered payments. Users easily access order history, while admins have a dedicated dashboard. Responsive design, Bcrypt-secured passwords, and Cloudinary image storage ensure a seamless and secure shopping experience.",
        img: ecommerce,
        tech: [
            "Next.js",
            "Schadcn UI",
            "Tailwind CSS",
            "MongoDB",
            "NodeMailer",
            "Stripe",
        ],
        source: "https://github.com/Pratiyush2003/next-js-shopping-app",
        demo: "https://next-js-shopping-app-two.vercel.app/",
    },
    {
        id: 6,
        name: "Portfolio Website",
        description:
            "This is my Portfolio website. It help me to shocase my skill and expertise its made up of react js and tailwind css Motion for Animation.",
        img: portfolio,
        //max 6 tech stack
        tech: ["React.js", "MongoDB", "Jwt"],
        source: "https://github.com/Pratiyush2003/port-pratiyush",
        demo: "https://port-pratiyush.vercel.app/",
    },
];
